"use strict";
;
;
/**
 * define icons code
 */
var icons = {
    "clear-night": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-moon\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path></svg>",
    "clear-day": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-sun\"><circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line></svg>",
    "rain": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-cloud-rain\"><line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"21\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"23\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path></svg>",
    "snow": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-cloud-snow\"><path d=\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\"></path><line x1=\"8\" y1=\"16\" x2=\"8\" y2=\"16\"></line><line x1=\"8\" y1=\"20\" x2=\"8\" y2=\"20\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"18\"></line><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"22\"></line><line x1=\"16\" y1=\"16\" x2=\"16\" y2=\"16\"></line><line x1=\"16\" y1=\"20\" x2=\"16\" y2=\"20\"></line></svg>",
    "sleet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-cloud-drizzle\"><line x1=\"8\" y1=\"19\" x2=\"8\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\"></line><line x1=\"16\" y1=\"19\" x2=\"16\" y2=\"21\"></line><line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"15\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"17\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path></svg>",
    "wind": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-wind\"><path d=\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\"></path></svg>",
    "fog": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-fog\"><line x1=\"8.49\" y1=\"18.24\" x2=\"15.51\" y2=\"18.24\" /><line x1=\"10.24\" y1=\"21.34\" x2=\"13.76\" y2=\"21.34\" /><line x1=\"7.39\" y1=\"15.13\" x2=\"16.61\" y2=\"15.13\" /><path d=\"M20,18.24a5,5,0,0,0-2-9.58H16.75A8,8,0,1,0,4,16.91\" /></svg>",
    "cloudy": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-cloud\"><path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"></path></svg>",
    "partly-cloudy-day": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7271745002582983\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-cloud-day\"><path d=\"M15.22,14.36a4.32,4.32,0,1,0-6.08-5.1\"/><line x1=\"13.28\" y1=\"1\" x2=\"13.28\" y2=\"2.73\"/><line x1=\"6.56\" y1=\"3.78\" x2=\"7.79\" y2=\"5.01\"/><line x1=\"21.05\" y1=\"10.5\" x2=\"22.78\" y2=\"10.5\"/><line x1=\"18.77\" y1=\"5.01\" x2=\"20\" y2=\"3.78\"/><path d=\"M15.91,14.36H14.82A6.91,6.91,0,1,0,8.13,23h7.78a4.32,4.32,0,0,0,0-8.64Z\"/></svg>",
    "partly-cloudy-night": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6552532585782678\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-cloudy-night\"><path d=\"M18.35,15.82A7.44,7.44,0,0,0,23,9.6a5.8,5.8,0,0,1-8.11-8.1A7.45,7.45,0,0,0,8.14,8.23a7.36,7.36,0,0,0,0,1\"/><path d=\"M15.1,14.22h-1A6.62,6.62,0,1,0,7.65,22.5H15.1a4.14,4.14,0,0,0,0-8.28Z\"/></svg>",
    "hail": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-hail\"><path d=\"M20,17.58A5,5,0,0,0,18,8H16.74A8,8,0,1,0,4,16.25\" /><line x1=\"7.8\" y1=\"17.53\" x2=\"7.8\" y2=\"17.53\" /><line x1=\"9.15\" y1=\"21.29\" x2=\"9.15\" y2=\"21.29\" /><line x1=\"12.24\" y1=\"18.06\" x2=\"12.24\" y2=\"18.06\" /><line x1=\"13.59\" y1=\"21.82\" x2=\"13.59\" y2=\"21.82\" /><line x1=\"15.33\" y1=\"14.83\" x2=\"15.33\" y2=\"14.83\" /><line x1=\"16.68\" y1=\"18.59\" x2=\"16.68\" y2=\"18.59\" /></svg>",
    "thunderstorm": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-cloud-lightning\"><path d=\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\"></path><polyline points=\"13 11 9 17 15 17 11 23\"></polyline></svg>",
    "tornado": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8342556260551666\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-tornado\"><path d=\"M7.82,6c2.68-1.25,11.6-1.41,11.6,1S1.5,10.09,1.5,5.84s15.44-4.9,21-2.77\" /><path d=\"M12.3,8.94S4.57,9,4.57,11.27s11,2.64,14.25,0\" /><path d=\"M10.54,13.1s6.25.09,6.25,1.68-7.28,3.09-10.85-.09\" /><path d=\"M14.12,16.32s-4.83.69-4.83,1.8,4.27,1.73,6.29,1.37\" /><path d=\"M14.19,19.6s-1.55.58-1.49,1.35,1.77,1.33,2.88,1.12\" /></svg>",
    'sunrise': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunrise"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>',
    'sunset': "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-sunset\"><path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"2\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"16 5 12 9 8 5\"></polyline></svg>",
    "droplet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-droplet\"><path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"></path></svg>",
    "wind-dir": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-navigation-2\"><polygon points=\"12 2 19 21 12 17 5 21 12 2\"></polygon></svg>",
    "arrow-down": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevron-down\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>"
};
/**
 * Gets a icon svg code based on a key
 *
 * @param {string} icon - icon key
 */
var getIcon = function (icon) { return icons[icon]; };
// Define web app constants
var KEY_USERNAME = 'username', KEY_LOCATION = 'location', KEY_CITY = 'city', API_KEY = 'a11c099d3dfac008f325d806a2e8e43f', MAPBOX_KEY = 'pk.eyJ1IjoidGhlLXR1cnRsZSIsImEiOiJjamxkOXVlajgwOTN4M3FwaDFjbHRtMTZ6In0.7XM2WPENWe5p0PLeSoBc2Q', DARK_SKY = "https://api.darksky.net/forecast/" + API_KEY + "/", MAPBOX = 'https://api.mapbox.com', MEETUP = 'https://api.meetup.com/find/upcoming_events?&sign=true&key=73a5379b4f15491cd4b6be472161&photo-host=public';
// Define web app location variables and elements
var local_storage = window.localStorage, session_storage = window.sessionStorage, username = null, user_location = null, user_city = null, location_available = true, currentDate = new Date(), current_weather = null, loader = document.getElementById('loading'), personal_name_input = document.getElementById('personal-name'), personal_name_save = document.getElementById('save-name'), welcome_message = document.querySelector('#app .welcome-msg'), weekend_page = document.getElementById('page--weekend-planner'), app = document.getElementById('app'), body = document.body, hourly_wrapper = document.getElementById('hourly-info'), cityDOM = document.querySelector('p[data-city]'), location_selection = document.getElementById('location-selection'), location_search = document.getElementById('location'), autocomplete_buffer = 1000, search_results = document.getElementById('results');
/**
 * Overcome CORS on localhost
 *
 * @param {string} url - API Endpoint URL
 */
var AJAX = function (url) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        var name = "_jsonp_" + Math.round(100000 * Math.random());
        //url formatting
        if (url.match(/\?/))
            url += "&callback=" + name;
        else
            url += "?callback=" + name;
        script.src = url;
        window[name] = function (data) {
            resolve(data);
            document.body.removeChild(script);
            delete window[name];
        };
        document.body.appendChild(script);
    });
};
/**
 * Creates a HTML element from a string
 *
 * @param {string} dom_string - string of HTML code
 */
var createElement = function (dom_string) {
    var template = document.createElement('template');
    template.innerHTML = dom_string.trim();
    return template.content.firstChild;
};
/**
 * Format the time to 17:00pm based on epoch number
 *
 * @param {number} time - epoch number
 * @param {string} timezone - current timezone
 *
 * @return {string} formatted time
 */
var formatTime = function (time, timezone) {
    if (typeof timezone === 'undefined' && current_weather !== null) {
        timezone = current_weather.timezone;
    }
    var date = new Date(time * 1000), curtime = date.toLocaleTimeString('en-GB', { timeZone: timezone }), hour = curtime.match(/(^\d{2})/gm);
    return "" + curtime.replace(/(:\d{2}$)/gm, '') + (hour && parseInt(hour[0]) >= 12 ? 'pm' : 'am');
};
/**
 * Gets the current users location data
 *
 * @param {string|null} usr_pos - saved user position
 */
var getUserLocation = function (usr_pos) {
    // gets users permission to get geolocation
    if (navigator.geolocation && usr_pos === null) {
        return new Promise(function (resolve, reject) { return (navigator.geolocation.getCurrentPosition(resolve, reject)); });
    }
    else {
        // returns the session storage value
        if (usr_pos !== null) {
            return new Promise(function (resolve) { return resolve(JSON.parse(usr_pos)); });
        }
        // returns empty object
        else {
            return new Promise(function (resolve) { return resolve({}); });
        }
    }
};
/**
 * Updated the header with the current temperature, and weather icon
 */
var updateHeader = function () {
    var domDestination = document.querySelector('header.appbar .details .details-icon .back-arrow'), temp = document.querySelector('header .temp span');
    if (domDestination !== null) {
        var currentSvg = document.querySelector('header.appbar .details .feather.target'), parent_1 = domDestination.parentNode;
        if (parent_1 !== null) {
            // gets the correct icon
            var icon = current_weather.currently.icon, svg_struct = getIcon(icon), svg_dom = createElement(svg_struct);
            // removes any existing icon & inserts the DOM
            if (svg_dom !== null) {
                if (currentSvg) {
                    currentSvg.remove();
                }
                parent_1.insertBefore(svg_dom, domDestination);
            }
        }
    }
    if (temp && current_weather) {
        temp.innerHTML = Math.round(current_weather.currently.apparentTemperature).toString();
    }
};
/**
 * Gets the current users name from local storage and displays it,
 * if it is found
 */
var updateApplicationUsername = function () {
    username = local_storage.getItem(KEY_USERNAME);
    if (username !== null && welcome_message !== null) {
        welcome_message.setAttribute('data-name', 'true');
        var name_span = welcome_message.querySelector('.c-orange');
        if (name_span !== null) {
            name_span.innerHTML = username;
        }
    }
};
/**
 * Saves the users name into local storage and updates the DOM
 *
 * @param {Event} e - click event
 */
var saveApplicationUsername = function (e) {
    e.preventDefault();
    if (personal_name_input !== null) {
        var name_1 = personal_name_input.value;
        // Minor error checking
        if (name_1.trim() === '') {
            alert('Please enter a name');
        }
        local_storage.setItem(KEY_USERNAME, name_1);
        updateApplicationUsername();
    }
};
/**
 * Gets the users city from session storage
 * and sets the global variable
 */
var getUserLocationCity = function () {
    var city = session_storage.getItem(KEY_CITY);
    if (city !== null && city !== '') {
        user_city = city;
    }
};
/**
 * Updates the city DOM with the users city
 *
 * @param {string} city Users city
 */
var updateUserCity = function (city) {
    if (cityDOM !== null) {
        cityDOM.innerHTML = city;
    }
};
/**
 * Updates the header date and time based on the users timezone
 */
var updateDatetime = function () {
    var options = {
        timeZone: current_weather.timezone,
        day: 'numeric',
        month: 'short'
    }, date = currentDate.toLocaleDateString('en-GB', options);
    var datetimeDOM = document.querySelector('p[data-datetime]');
    if (datetimeDOM) {
        datetimeDOM.innerHTML = date + " " + currentDate.getFullYear() + " // " + formatTime(Date.now() / 1000, current_weather.timezone);
    }
};
/**
 * Gets the day as a word based on a index. 0 = Sunday
 * @param index getDay() return value
 */
var getDayString = function (index) {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][index];
};
/**
 * Filters through the daily weather and gets the upcoming Saturday and Sundays weather
 * @param daily - DarkSky return object
 */
var getUpcomingWeekendWeather = function (daily) {
    var data = daily.filter(function (item, index) {
        if (index !== 0) {
            var date = new Date(item.time * 1000), day = date.getDay(), dayString = getDayString(day);
            if (dayString === 'Sunday' || dayString === 'Saturday') {
                item['day'] = dayString;
                return item;
            }
        }
    });
    return data;
};
/**
 * Constructs box items for the weekend data
 * @param {Array<DailyWeather>} items - forecast array
 */
var dailyWeatherData = function (items) {
    var box_items = items.map(function (item) { return ("\n            <div class=\"box-item\">\n                " + (typeof item.deg !== 'undefined' ? "<span style=\"transform: rotate(" + item.deg + "deg);\">" : '') + "\n                    " + getIcon(item.icon) + "\n                " + (typeof item.deg !== 'undefined' ? '</span>' : '') + "\n                <div class=\"data\">\n                    <span class=\"label\">" + item.label + "</span>\n                    <p>" + item.value + "</p>\n                </div>\n            </div>\n        "); });
    return "<div class=\"box\">" + box_items.join('') + "</div>";
};
/**
 * Constructs the weekend weather statistics
 *
 * @param data - Weekend day weather details
 * @param timezone - current users timezone to format time correctly
 */
var weekendTemplate = function (data, timezone) {
    // create an array holding the box data
    // Able to add new boxes if needed
    var boxes = [
        [
            { icon: 'sunrise', label: 'sunrise', value: "" + formatTime(data.sunriseTime, timezone) },
            { icon: 'sunset', label: 'sunset', value: "" + formatTime(data.sunsetTime, timezone) }
        ],
        [
            { icon: 'wind-dir', label: 'wind', value: Math.floor(data.windSpeed) + "km/h", deg: data.windBearing },
            { icon: 'wind', label: 'wind gust', value: Math.floor(data.windGust) + "km/h" }
        ],
        [
            { icon: 'droplet', label: 'participation', value: Math.floor(data.precipProbability * 100) + "%" },
            { icon: 'rain', label: 'type', value: data.precipType || 'none' }
        ]
    ];
    var boxesDomString = boxes.map(function (box) { return dailyWeatherData(box); });
    // Dropdown stats - able to add more if needed
    var stats = [
        { label: 'cloud cover', value: Math.floor(data.cloudCover * 100) + "%" },
        { label: 'humidity', value: Math.floor(data.humidity * 100) + "%" },
        { label: 'temp low', value: Math.floor(data.temperatureLow) + "&deg;" },
        { label: 'temp high', value: Math.floor(data.temperatureHigh) + "&deg;" },
        { label: 'UV index', value: data.uvIndex }
    ];
    boxesDomString.push("\n            <div class=\"box stats\">\n                <p class=\"label c-black\">Stats for geeks" + getIcon('arrow-down') + "</p>\n                <ul class=\"stats-wrapper\">\n                    " + stats.map(function (item) { return ("<li class=\"stat\"><span class=\"label c-purple\">" + item.label + "</span><p>" + item.value + "</p></li>"); }).join('') + "\n                </ul>\n            </div>\n        ");
    // Constructs the weekend forecast section
    var elemString = "\n        <div class=\"forecast-section\">\n            <h2>" + data.day + "<br><span class=\"c-orange\">" + Math.floor(data.apparentTemperatureHigh) + "&deg;</span></h2>\n            <div class=\"box-wrapper\">\n                " + boxesDomString.join('') + "\n            </div>\n        </div>\n    ";
    return elemString;
};
/**
 * Creates the full DOM for the weather data on the weekend page
 *
 * @param data - Saturday and Sundays weather
 * @param timezone - current users timezone
 */
var populateWeekendPage = function (data, timezone) {
    var forecastDOM = data.map(function (item) { return weekendTemplate(item, timezone); }), forecastElem = createElement('<div class="forecast-wrapper container">' + forecastDOM.join('') + '</div>');
    if (weekend_page !== null && forecastElem !== null) {
        weekend_page.appendChild(forecastElem);
        var box_stats_1 = weekend_page.querySelectorAll('.forecast-section .box-wrapper .box.stats');
        if (box_stats_1) {
            var _loop_1 = function (x) {
                // Binds the dropdown toggle function to the newly created DOM
                box_stats_1[x].addEventListener('click', function (e) {
                    e.preventDefault();
                    box_stats_1[x].classList.toggle('open');
                });
            };
            for (var x = 0; x < box_stats_1.length; x++) {
                _loop_1(x);
            }
        }
    }
};
/**
 * Creates a single event card
 *
 * @param event - Single event data
 */
var meetupTemplate = function (event) {
    var name = event.name, link = event.link, local_date = event.local_date, local_time = event.local_time;
    return "\n        <a href=\"" + link + "\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"event-card\">\n            <p class=\"date\">" + local_date + " // " + local_time + "</p>\n            <h4>" + name + "</h4>\n        </a>\n    ";
};
/**
 * Populates the meetup events data based on fetched data
 *
 * @param data - meetup response data
 */
var populateMeetup = function (data) {
    var meetupDOM = [];
    if (data.length === 0) {
        // No results DOM
        meetupDOM.push("\n            <div class=\"no-results\">\n                <h4>No Meetups Found</h4>\n                <a href=\"https://www.meetup.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Visit Meetup</a>\n            </div>\n        ");
    }
    else {
        meetupDOM = data.map(function (item) { return meetupTemplate(item); });
    }
    return createElement("\n        <div class=\"meetup-section\">\n            <h2>Meetups</h2>\n            <div class=\"meetup-listing\">\n                " + meetupDOM.join('') + "\n            </div>\n        </div>\n    ");
};
/**
 * Formats the weekend dates in ISO Format for Meetup - 2018-09-09T00:00:00
 * @param time - epoch time
 * @param timezone - users timezone
 */
var getDateISOFormat = function (time, timezone) {
    var date = new Date(time * 1000), day = date.toDateString().match(/(\d{1,2}\s)/gm), month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    if (day && month) {
        return date.getFullYear() + "-" + month + "-" + day[0].trim() + "T" + date.toLocaleTimeString('en-GB', { timeZone: timezone });
    }
};
/**
 * Creates box items for the 48hr forecasts
 *
 * @param data - DarkSky forecast data
 * @param timezone - current users timezone
 */
var displayHourlyForecast = function (data, timezone) {
    var hourly = data.map(function (item) {
        return "\n            <div class=\"box\">\n                <div class=\"box-item\">\n                    " + getIcon(item.icon) + "\n                    <div class=\"data\">\n                        <span class=\"label\">" + formatTime(item.time, timezone) + "</span>\n                        <p>" + Math.floor(item.apparentTemperature) + "&deg;</p>\n                    </div>\n                </div>\n            </div>\n        ";
    });
    var hourly_dom = createElement("<div class=\"hourly-wrapper\">" + hourly.join('') + "</div>");
    if (hourly_wrapper && hourly_dom) {
        // append the new elements to the wrapper
        hourly_wrapper.appendChild(hourly_dom);
    }
};
/**
 * Triggers a page change transition
 *
 * @param page - page element
 * @param classList - classes to remove/add from the body
 * @param callback - optional callback function to run on page change
 */
var changePage = function (page, classList, callback) {
    if (callback === void 0) { callback = null; }
    if (page) {
        page.addEventListener('click', function (e) {
            var _a, _b;
            e.preventDefault();
            if (body) {
                window.scrollTo(0, 0);
                if (typeof classList.add !== 'undefined') {
                    (_a = body.classList).add.apply(_a, classList.add.split(' '));
                }
                if (typeof classList.remove !== 'undefined') {
                    (_b = body.classList).remove.apply(_b, classList.remove.split(' '));
                }
                if (callback) {
                    callback();
                }
            }
        });
    }
};
/**
 * Updates the users location data when changing their location using search
 *
 * @param location - lat and lng data object
 * @param city - new city string
 */
var updateApplicationData = function (location, city) {
    user_location = location;
    session_storage.setItem(KEY_LOCATION, JSON.stringify(user_location));
    updateUserCity(city);
    session_storage.setItem(KEY_CITY, city);
    // Triggers a reload to display the new data
    window.location.href = "/";
};
/**
 * Displays all the search results and binds the click event to
 * the newly created DOM elements.
 * @param data Mapbox returned data
 */
var displaySearchResults = function (data) {
    var list = data.map(function (item) { return ("\n            <li data-lng=\"" + item.center[0] + "\" data-lat=\"" + item.center[1] + "\" data-city=\"" + item.text + "\">" + item.place_name + "</li>\n        "); });
    if (list.length === 0) {
        // Empty State
        list.push("<p class=\"label\">No Results Found</p>");
    }
    var resultsDOM = createElement("<ul class=\"search-results\">" + list.join('') + "</ul>");
    if (search_results && resultsDOM) {
        // clear the search results before appending new results.
        search_results.innerHTML = '';
        search_results.appendChild(resultsDOM);
        var search_items_1 = search_results.querySelectorAll('li');
        if (search_items_1) {
            var _loop_2 = function (i) {
                // Bind the click event
                search_items_1[i].addEventListener('click', function (e) {
                    e.preventDefault();
                    var location_data = {
                        "coords": {
                            "latitude": search_items_1[i].getAttribute('data-lat'),
                            "longitude": search_items_1[i].getAttribute('data-lng')
                        }
                    };
                    // Update the application data and reload the page.
                    updateApplicationData(location_data, search_items_1[i].getAttribute('data-city') || '');
                });
            };
            for (var i = 0; i < search_items_1.length; i++) {
                _loop_2(i);
            }
        }
    }
};
// Application setup before displaying any data to the user
var setupApp = function () { return new Promise(function (resolve) {
    // Check if there is a username
    updateApplicationUsername();
    // Gets the users city
    getUserLocationCity();
    // Gets the location from session storage
    user_location = session_storage.getItem(KEY_LOCATION);
    // Gets the users location
    getUserLocation(user_location)
        .then(function (position) {
        // Sets default location to UC campus
        if (typeof position.coords === 'undefined') {
            user_location = {
                "coords": {
                    "latitude": -35.2384096,
                    "longitude": 149.083832
                }
            };
        }
        else {
            // Sets the location to the returned data
            user_location = {
                "coords": {
                    "latitude": position.coords.latitude,
                    "longitude": position.coords.longitude
                }
            };
        }
        // Sets the session storage value
        session_storage.setItem(KEY_LOCATION, JSON.stringify(user_location));
    })["catch"](function (e) { return console.error('Location', e); })
        .then(function () {
        // If there is no city
        if (user_city === null) {
            // Fetch the city from mapbox based on the users location
            var url = MAPBOX + "/geocoding/v5/mapbox.places/" + user_location.coords.longitude + "%2C" + user_location.coords.latitude + ".json?access_token=" + MAPBOX_KEY + "&types=place";
            return fetch(url)
                .then(function (res) { return res.json(); })
                .then(function (data) {
                // Updates the city text and sets session storage
                updateUserCity(data.features[0].text);
                session_storage.setItem(KEY_CITY, data.features[0].text);
            })["catch"](function (e) { return console.error(e); });
        }
        else {
            // Update the city text
            updateUserCity(user_city);
        }
    })
        .then(function () {
        // Gets the weather data from dark sky based on the users location
        var url = DARK_SKY + (user_location.coords.latitude + "," + user_location.coords.longitude + "?units=ca&exclude=[minutely,alerts,flags]");
        return AJAX(url)
            .then(function (data) {
            current_weather = data;
            // Updates the Header to reflect the weather
            updateHeader();
            // Updates the time - needs to happen here to have access to the users timezone
            updateDatetime();
            // Renders the hourly forecast
            displayHourlyForecast(current_weather.hourly.data, current_weather.timezone);
        })["catch"](function (e) { return console.error('Dark Sky Fetch', e); });
    })["catch"](function (e) { return console.error('Dark Sky', e); })
        .then(function () {
        // continues once everything is completed
        resolve();
    });
}); };
setupApp()
    .then(function () {
    // Adds the loaded class to the body to hide the loading animation
    if (body) {
        body.classList.add('loaded');
    }
    // Adds a event listener to the save button
    if (personal_name_save !== null) {
        personal_name_save.addEventListener('click', function (e) {
            saveApplicationUsername(e);
        });
    }
    // Gets the weekend weather
    var weekend_weather = getUpcomingWeekendWeather(current_weather.daily.data), back_arrow = document.querySelector('.appbar .details .feather.back-arrow'), weekend_card = document.querySelector('#app .app-options .option .card.weekend-planner');
    // Populates the weekend page with the weekend weather data
    populateWeekendPage(weekend_weather, current_weather.timezone);
    // Change page options for the weekend card
    changePage(weekend_card, {
        add: 'weekend-open'
    });
    // Change page options for the back arrow
    changePage(back_arrow, {
        remove: 'weekend-open location-selection-open'
    }, function () {
        // Clears the search input field
        if (location_search) {
            location_search.value = '';
            if (search_results) {
                search_results.innerHTML = '';
            }
        }
    });
    // Change page options for the city page
    changePage(cityDOM, {
        add: 'location-selection-open',
        remove: 'weekend-open'
    });
    if (location_search) {
        // sets the autocomplete timer to null
        var autocomplete_timer_1 = null;
        // if the user presses a key, reset the timer.
        location_search.addEventListener('keydown', function (e) {
            clearTimeout(autocomplete_timer_1);
        });
        // adds input event listener to search field
        location_search.addEventListener('input', function (e) {
            // if the input value is empty, remove all search results
            if (e.target.value === '') {
                if (search_results) {
                    search_results.innerHTML = '';
                }
            }
            // If the input value is nothing or less than 3 characters, don't search for city
            if (e.target.value === '' || e.target.value.length < 3)
                return false;
            // set timeout for buffer time.
            autocomplete_timer_1 = setTimeout(function () {
                // Adds a loading animation
                if (location_selection) {
                    location_selection.classList.add('loading');
                }
                // Fetches the search data from mapbox
                var url = MAPBOX + "/geocoding/v5/mapbox.places/" + encodeURIComponent(e.target.value) + ".json?access_token=" + MAPBOX_KEY + "&place_type=[place,country,region]";
                fetch(url)
                    .then(function (res) { return res.json(); })
                    .then(function (data) {
                    // remove the loading animation
                    if (location_selection) {
                        location_selection.classList.remove('loading');
                    }
                    // display all the search results.
                    displaySearchResults(data.features);
                })["catch"](function (e) { return console.error('Search error', e); });
            }, autocomplete_buffer);
        });
    }
    // Gets the correct time format for the meetup request.
    var end_date_range = getDateISOFormat(weekend_weather[1].time, current_weather.timezone);
    var start_date_range = getDateISOFormat(weekend_weather[0].time, current_weather.timezone);
    // construct the meetup request URL
    // replaces ending 00:00:00 to 23:59:59 to ensure that Sunday's events are included
    var meetupURL = MEETUP + "&lon=" + user_location.coords.longitude + "&lat=" + user_location.coords.latitude + "&radius=10&page=50&topic_category=15892&end_date_range=" + (end_date_range ? end_date_range.replace(/(\d{2}:\d{2}:\d{2})/gm, '23:59:59') : end_date_range) + "&start_date_range=" + start_date_range;
    console.log(meetupURL);
    // call meetup api
    AJAX(meetupURL)
        .then(function (data) {
        // if there are errors then exit out
        if (typeof data.errors !== 'undefined')
            return false;
        if (start_date_range && end_date_range) {
            var start_1 = start_date_range.replace(/(T\d{2}:\d{2}:\d{2})/gm, ''), end_1 = end_date_range.replace(/(T\d{2}:\d{2}:\d{2})/gm, '');
            // ensure only weekend events are being displayed
            var events = data.data.events.filter(function (item) {
                return item.local_date === start_1 || item.local_date === end_1;
            });
            // Populate the meetup container
            var meetupDOM = populateMeetup(events);
            // Append the meetup content to the weekend page
            if (weekend_page) {
                var target = weekend_page.querySelector('.forecast-wrapper');
                if (target && meetupDOM) {
                    target.appendChild(meetupDOM);
                }
            }
        }
    })["catch"](function (e) { return console.error('Meetup', e); });
})["catch"](function (error) { return console.error('Error', error); });
