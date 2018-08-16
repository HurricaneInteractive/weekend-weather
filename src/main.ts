/**
 * TODO:
 * - Update loading text while fetch data for user feedback
 * - Fetch the city location
 * - Save the weekend weather ready for population
 * - Fetch Meetup data in the background and start filtering process
 * - Get the secret data
 */

const icons: any = {
    "moon": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    "sun": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
};

const getIcon = (icon: string) => icons[icon]

const KEY_USERNAME: string = 'username',
    KEY_LOCATION: string = 'location',
    SVG_STRUCTURE: string = `<svg class="feather"><use xlink:href="img/feather-icons.svg#{{code}}"/></svg>`,
    API_KEY: string = 'a11c099d3dfac008f325d806a2e8e43f',
    DARK_SKY: string = `https://api.darksky.net/forecast/${API_KEY}/`;

let local_storage: Storage = window.localStorage,
    session_storage: Storage = window.sessionStorage,
    username: string|null = null,
    user_location: any = null,
    location_available: boolean = true,
    currentDate = new Date(),
    current_weather: any = null,
    loader: HTMLElement|null = document.getElementById('loading'),
    personal_name_input: any = document.getElementById('personal-name'),
    personal_name_save: HTMLElement|null = document.getElementById('save-name'),
    welcome_message: HTMLElement|null = document.querySelector('#app .welcome-msg');

// Overcome CORS on localhost
const AJAX = (url: string) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        const name = "_jsonp_" + Math.round(100000 * Math.random());
        //url formatting
        if (url.match(/\?/)) url += "&callback="+name
        else url += "?callback="+name
        script.src = url;

        (<any>window)[name] = (data: any) => {
            resolve(data);
            document.body.removeChild(script);
            delete (<any>window)[name];
        }
        document.body.appendChild(script);
    });
}

const FtoC = (f: number) => Math.round( (f - 32) * 0.5556 ).toString()
const CtoF = (c: number) => Math.round( (c * 1.8) + 32 ).toString()

const createElement = (dom_string: string) => {
    let template = document.createElement('template')
    template.innerHTML = dom_string.trim()
    return template.content.firstChild
}

const getUserLocation = (usr_pos: string|null) => {
    if (navigator.geolocation && usr_pos === null) {
        return new Promise((resolve, reject) => (
            navigator.geolocation.getCurrentPosition(resolve, reject)
        ))
    }
    else {
        if (usr_pos !== null) {
            return new Promise(resolve => resolve(JSON.parse(usr_pos)))
        }
        else {
            return new Promise(resolve => resolve({}))
        }
    }
}

const updateHeader = () => {
    let domDestination = document.querySelector('header.appbar .details .datetime-location'),
        temp = document.querySelector('header .temp span');

    if (domDestination !== null) {
        let currentSvg = document.querySelector('header.appbar .details .feather'),
            parent = domDestination.parentNode;
        if (parent !== null) {
            let hour = currentDate.getHours(),
                re = new RegExp('{{code}}', 'g'),
                icon = hour > 18 || hour < 6 ? 'moon' : 'sun',
                svg_struct = getIcon(icon),
                svg_dom = createElement(svg_struct);
            
            // console.log(svg_struct);

            if (svg_dom !== null) {
                if (currentSvg) {
                    currentSvg.remove();
                }
                parent.insertBefore(svg_dom, domDestination);
            }
        }
    }

    if (temp && current_weather) {
        temp.innerHTML = FtoC(current_weather.currently.temperature);
    }
}

const updateApplicationUsername = () => {
    username = local_storage.getItem(KEY_USERNAME)

    if (username !== null && welcome_message !== null) {
        welcome_message.setAttribute('data-name', 'true')
        let name_span = welcome_message.querySelector('.c-orange');
        
        if (name_span !== null) {
            name_span.innerHTML = username;
        }
    }
}

const saveApplicationUsername = (e: Event) => {
    e.preventDefault();
    if (personal_name_input !== null) {
        let name = personal_name_input.value;

        if (name.trim() === '') {
            alert('Please enter a name');
        }

        local_storage.setItem(KEY_USERNAME, name);
        updateApplicationUsername();
    }
}

const setupApp = () => new Promise(resolve => {

    updateApplicationUsername();
    // local_storage.clear();

    user_location = session_storage.getItem(KEY_LOCATION)

    getUserLocation(user_location)
        .then((position: any) => {
            if (typeof position.coords === 'undefined') {
                user_location = null;
                location_available = false;
            }
            else {
                user_location = {
                    "coords": {
                        "latitude": position.coords.latitude,
                        "longitude": position.coords.longitude
                    }
                }
                session_storage.setItem(KEY_LOCATION, JSON.stringify(user_location))
            }
        })
        .catch(e => console.error('Location', e))
        .then(() => {
            let url = DARK_SKY + `${user_location.coords.latitude},${user_location.coords.longitude}`;
            return AJAX(url)
                .then((data) => {
                    current_weather = data;
                    console.log('Dark Sky Data', current_weather);
                    
                    updateHeader();
                })
                .catch(e => console.error('Dark Sky Fetch', e))
        })
        .catch(e => console.error('Dark Sky', e))
        .then(() => {
            resolve()
        })
})

setupApp()
    .then(() => {
        if (loader) {
            loader.classList.add('loaded')
        }
        // Remove Loading Animation
        console.log('Application Ready', username)
        console.log('Application Location', user_location)

        if (personal_name_save !== null) {
            personal_name_save.addEventListener('click', (e) => {
                saveApplicationUsername(e)
            });
        }
    })
    .catch(error => console.error('Error', error))