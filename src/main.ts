/**
 * TODO:
 * - Update loading text while fetch data for user feedback
 * - Save the weekend weather ready for population
 * - Fetch Meetup data in the background and start filtering process
 * - Get the secret data
 */

interface DailyWeather {
    icon: string,
    label: string,
    value: string,
    deg?: number
}

const icons: any = {
    "clear-night": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    "clear-day": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    "rain": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>`,
    "snow": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-snow"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="8" y1="20" x2="8" y2="20"></line><line x1="12" y1="18" x2="12" y2="18"></line><line x1="12" y1="22" x2="12" y2="22"></line><line x1="16" y1="16" x2="16" y2="16"></line><line x1="16" y1="20" x2="16" y2="20"></line></svg>`,
    "sleet": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-drizzle"><line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>`,
    "wind": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wind"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>`,
    "fog": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-fog"><line x1="8.49" y1="18.24" x2="15.51" y2="18.24" /><line x1="10.24" y1="21.34" x2="13.76" y2="21.34" /><line x1="7.39" y1="15.13" x2="16.61" y2="15.13" /><path d="M20,18.24a5,5,0,0,0-2-9.58H16.75A8,8,0,1,0,4,16.91" /></svg>`,
    "cloudy": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    "partly-cloudy-day": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7271745002582983" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-day"><path d="M15.22,14.36a4.32,4.32,0,1,0-6.08-5.1"/><line x1="13.28" y1="1" x2="13.28" y2="2.73"/><line x1="6.56" y1="3.78" x2="7.79" y2="5.01"/><line x1="21.05" y1="10.5" x2="22.78" y2="10.5"/><line x1="18.77" y1="5.01" x2="20" y2="3.78"/><path d="M15.91,14.36H14.82A6.91,6.91,0,1,0,8.13,23h7.78a4.32,4.32,0,0,0,0-8.64Z"/></svg>`,
    "partly-cloudy-night": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6552532585782678" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloudy-night"><path d="M18.35,15.82A7.44,7.44,0,0,0,23,9.6a5.8,5.8,0,0,1-8.11-8.1A7.45,7.45,0,0,0,8.14,8.23a7.36,7.36,0,0,0,0,1"/><path d="M15.1,14.22h-1A6.62,6.62,0,1,0,7.65,22.5H15.1a4.14,4.14,0,0,0,0-8.28Z"/></svg>`,
    "hail": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hail"><path d="M20,17.58A5,5,0,0,0,18,8H16.74A8,8,0,1,0,4,16.25" /><line x1="7.8" y1="17.53" x2="7.8" y2="17.53" /><line x1="9.15" y1="21.29" x2="9.15" y2="21.29" /><line x1="12.24" y1="18.06" x2="12.24" y2="18.06" /><line x1="13.59" y1="21.82" x2="13.59" y2="21.82" /><line x1="15.33" y1="14.83" x2="15.33" y2="14.83" /><line x1="16.68" y1="18.59" x2="16.68" y2="18.59" /></svg>`,
    "thunderstorm": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-lightning"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline></svg>`,
    "tornado": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8342556260551666" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tornado"><path d="M7.82,6c2.68-1.25,11.6-1.41,11.6,1S1.5,10.09,1.5,5.84s15.44-4.9,21-2.77" /><path d="M12.3,8.94S4.57,9,4.57,11.27s11,2.64,14.25,0" /><path d="M10.54,13.1s6.25.09,6.25,1.68-7.28,3.09-10.85-.09" /><path d="M14.12,16.32s-4.83.69-4.83,1.8,4.27,1.73,6.29,1.37" /><path d="M14.19,19.6s-1.55.58-1.49,1.35,1.77,1.33,2.88,1.12" /></svg>`,
    'sunrise': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunrise"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>',
    'sunset': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunset"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg>`,
    "droplet": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`,
    "wind-dir": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-navigation-2"><polygon points="12 2 19 21 12 17 5 21 12 2"></polygon></svg>`,
    "arrow-down": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>`
};

const getIcon = (icon: string) => icons[icon]

const KEY_USERNAME: string = 'username',
    KEY_LOCATION: string = 'location',
    KEY_CITY: string = 'city',
    SVG_STRUCTURE: string = `<svg class="feather"><use xlink:href="img/feather-icons.svg#{{code}}"/></svg>`,
    API_KEY: string = 'a11c099d3dfac008f325d806a2e8e43f',
    MAPBOX_KEY: string = 'pk.eyJ1IjoidGhlLXR1cnRsZSIsImEiOiJjamxkOXVlajgwOTN4M3FwaDFjbHRtMTZ6In0.7XM2WPENWe5p0PLeSoBc2Q',
    DARK_SKY: string = `https://api.darksky.net/forecast/${API_KEY}/`,
    MAPBOX: string = 'https://api.mapbox.com'

let local_storage: Storage = window.localStorage,
    session_storage: Storage = window.sessionStorage,
    username: string|null = null,
    user_location: any = null,
    user_city: any = null,
    location_available: boolean = true,
    currentDate = new Date(),
    current_weather: any = null,
    loader: HTMLElement|null = document.getElementById('loading'),
    personal_name_input: any = document.getElementById('personal-name'),
    personal_name_save: HTMLElement|null = document.getElementById('save-name'),
    welcome_message: HTMLElement|null = document.querySelector('#app .welcome-msg'),
    weekend_page: HTMLElement|null = document.getElementById('page--weekend-planner'),
    app: HTMLElement|null = document.getElementById('app'),
    body: HTMLElement|null = document.body

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
    let domDestination = document.querySelector('header.appbar .details .details-icon .back-arrow'),
        temp = document.querySelector('header .temp span');

    if (domDestination !== null) {
        let currentSvg = document.querySelector('header.appbar .details .feather.target'),
            parent = domDestination.parentNode;
        if (parent !== null) {
            let icon = current_weather.currently.icon,
                svg_struct = getIcon(icon),
                svg_dom = createElement(svg_struct);

            if (svg_dom !== null) {
                if (currentSvg) {
                    currentSvg.remove();
                }
                parent.insertBefore(svg_dom, domDestination);
            }
        }
    }

    if (temp && current_weather) {
        temp.innerHTML = Math.round(current_weather.currently.temperature).toString();
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

const getUserLocationCity = () => {
    let city = session_storage.getItem(KEY_CITY)
    if (city !== null && city !== '') {
        user_city = city
    }
}

const updateUserCity = (city: string) => {
    let cityDOM: any = document.querySelector('p[data-city]')
    if (cityDOM !== null) {
        cityDOM.innerHTML = city
    }
}

const updateDatetime = () => {
    let dateString = currentDate.toDateString(),
        time = currentDate.toLocaleTimeString(),
        year = dateString.match(/\d{4}/gm),
        day = dateString.match(/(\d{1,2}\s)/gm),
        month = dateString.match(/\s(\D{3})\s/gm),
        hour = currentDate.getHours()

    time = time.replace(/(:\d{2}$)/gm, '')
    
    if (year && day && month && time && hour) {
        let datetimeDOM = document.querySelector('p[data-datetime]')
        if (datetimeDOM) {
            datetimeDOM.innerHTML = `${day[0].trim()} ${month[0].trim()} ${year[0].trim()} // ${time.trim()}${ hour >= 12 ? 'PM' : 'AM' }`
        }
    }
}

const getDayString = (index: number) => {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][index];
}

const getUpcomingWeekendWeather = (daily: Array<object>) => {
    let data = daily.filter((item: any, index: number) => {
        if (index !== 0) {
            let date = new Date(item.time * 1000),
                day = date.getDay(),
                dayString = getDayString(day)

            if (dayString === 'Sunday' || dayString === 'Saturday') {
                item['day'] = dayString
                return item
            }
        }
    })

    return data;
}

const dailyWeatherData = (items: Array<DailyWeather>) => {
    let box_items = items.map(item => (
        `
            <div class="box-item">
                ${ typeof item.deg !== 'undefined' ? `<span style="transform: rotate(${item.deg}deg);">` : '' }
                    ${getIcon(item.icon)}
                ${ typeof item.deg !== 'undefined' ? '</span>' : '' }
                <div class="data">
                    <span class="label">${item.label}</span>
                    <p>${item.value}</p>
                </div>
            </div>
        `
    ))

    return `<div class="box">${box_items.join('')}</div>`
}

const weekendTemplate = (data: any) => {
    let sunrise = new Date(data.sunriseTime * 1000),
        sunset = new Date(data.sunsetTime * 1000),
        sunriseMinutes = sunrise.getMinutes() < 10 ? `0${sunrise.getMinutes()}` : sunrise.getMinutes(),
        sunsetMinutes = sunset.getMinutes() < 10 ? `0${sunset.getMinutes()}` : sunset.getMinutes(),
        sunriseHour = sunrise.getHours(),
        sunsetHour = sunset.getHours()

    let boxes = [
        [
            { icon: 'sunrise', label: 'sunrise', value: `${sunriseHour}:${sunriseMinutes}${ sunriseHour >= 12 ? 'pm' : 'am' }` },
            { icon: 'sunset', label: 'sunset', value: `${sunsetHour}:${sunsetMinutes}${ sunsetHour >= 12 ? 'pm' : 'am' }` }
        ],
        [
            { icon: 'wind-dir', label: 'wind', value: `${Math.floor(data.windSpeed)}km/h`, deg: data.windBearing },
            { icon: 'wind', label: 'wind gust', value: `${Math.floor(data.windGust)}km/h` }
        ],        
        [
            { icon: 'droplet', label: 'participation', value: `${Math.floor(data.precipProbability * 100)}%` },
            { icon: 'rain', label: 'type', value: data.precipType }
        ]
    ]

    let boxesDomString = boxes.map((box) => dailyWeatherData(box))

    let stats = [
        { label: 'cloud cover', value: `${Math.floor(data.cloudCover * 100)}%` },
        { label: 'humidity', value: `${Math.floor(data.humidity * 100)}%` },
        { label: 'temp low', value: `${Math.floor(data.temperatureLow)}&deg;` },
        { label: 'temp high', value: `${Math.floor(data.temperatureHigh)}&deg;` },
        { label: 'UV index', value: data.uvIndex }
    ]

    boxesDomString.push(
        `
            <div class="box stats">
                <p class="label c-black">Stats for geeks${getIcon('arrow-down')}</p>
                <ul class="stats-wrapper">
                    ${
                        stats.map((item) => ( `<li class="stat"><span class="label c-purple">${item.label}</span><p>${item.value}</p></li>` )).join('')
                    }
                </ul>
            </div>
        `
    )

    const elemString = `
        <div class="forecast-section">
            <h2>${data.day}<br><span class="c-orange">${Math.floor(data.apparentTemperatureHigh)}&deg;</span></h2>
            <div class="box-wrapper">
                ${boxesDomString.join('')}
            </div>
        </div>
    `

    return elemString;
}

const populateWeekendPage = (data: Array<object>) => {
    let forecastDOM = data.map(item => weekendTemplate(item)),
        forecastElem = createElement( '<div class="forecast-wrapper container">' + forecastDOM.join('') + '</div>' )

    if (weekend_page !== null && forecastElem !== null) {
        weekend_page.appendChild(forecastElem)

        let box_stats = weekend_page.querySelectorAll('.forecast-section .box-wrapper .box.stats');
        if (box_stats) {
            for (let x = 0; x < box_stats.length; x++) {
                box_stats[x].addEventListener('click', (e) => {
                    e.preventDefault();
                    box_stats[x].classList.toggle('open');
                })
            }
        }
    }
}

const setupApp = () => new Promise(resolve => {

    updateApplicationUsername();
    getUserLocationCity();
    updateDatetime();

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
            if (user_city === null) {
                let url = `${MAPBOX}/geocoding/v5/mapbox.places/${user_location.coords.longitude}%2C${user_location.coords.latitude}.json?access_token=${MAPBOX_KEY}&types=place`
                return fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        updateUserCity(data.features[0].text)
                        session_storage.setItem(KEY_CITY, data.features[0].text)
                    })
                    .catch(e => console.error(e))
            }
            else {
                updateUserCity(user_city)
            }
        })
        .then(() => {
            let url = DARK_SKY + `${user_location.coords.latitude},${user_location.coords.longitude}?units=ca&exclude=[minutely,alerts,flags,hourly]`;
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

        if (personal_name_save !== null) {
            personal_name_save.addEventListener('click', (e) => {
                saveApplicationUsername(e)
            });
        }

        let weekend_weather = getUpcomingWeekendWeather(current_weather.daily.data),
            back_arrow = document.querySelector('.appbar .details .feather.back-arrow')
        populateWeekendPage(weekend_weather);

        let weekend_card = document.querySelector('#app .app-options .option .card.weekend-planner')
        if (weekend_card) {
            weekend_card.addEventListener('click', (e) => {
                e.preventDefault()
                if (body) {
                    body.classList.add('weekend-open')
                }
            })
        }

        if (back_arrow) {
            back_arrow.addEventListener('click', (e) => {
                e.preventDefault()
                if (body) {
                    body.classList.remove('weekend-open')
                }
            })
        }
    })
    .catch(error => console.error('Error', error))