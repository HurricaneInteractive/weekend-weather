const icons: any = {
    "moon": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    "sun": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
};

const getIcon = (icon: string) => icons[icon]

const KEY_USERNAME: string = 'username',
    KEY_LOCATION: string = 'location',
    SVG_STRUCTURE: string = `<svg class="feather"><use xlink:href="img/feather-icons.svg#{{code}}"/></svg>`

let local_storage: Storage = window.localStorage,
    session_storage: Storage = window.sessionStorage,
    username: string|null = null,
    user_location: string|null|object|Position = null,
    location_available: boolean = true,
    currentDate = new Date(),
    currentWeather: Array<object>|null = null,
    loader: HTMLElement|null = document.getElementById('loading');
    
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

const updateHeaderIcon = () => {
    let domDestination = document.querySelector('header.appbar .details .datetime-location');

    if (domDestination !== null) {
        let currentSvg = document.querySelector('header.appbar .details .feather'),
            parent = domDestination.parentNode;
        if (parent !== null) {
            let hour = currentDate.getHours(),
                re = new RegExp('{{code}}', 'g'),
                icon = hour > 18 || hour < 6 ? 'moon' : 'sun',
                svg_struct = getIcon(icon),
                svg_dom = createElement(svg_struct);
            
            console.log(svg_struct);

            if (svg_dom !== null) {
                if (currentSvg) {
                    currentSvg.remove();
                }
                parent.insertBefore(svg_dom, domDestination);
            }
        }
    }
}

const setupApp = () => new Promise(resolve => {
    username = local_storage.getItem(KEY_USERNAME)
    user_location = session_storage.getItem(KEY_LOCATION)
    // session_storage.clear();

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

            console.log('Get Weather Details...');
            updateHeaderIcon();
        })
        .catch(e => console.error('Location', e))
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
    })
    .catch(error => console.error('Error', error))