"use strict";
var icons = {
    "moon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-moon\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path></svg>",
    "sun": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-sun\"><circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line></svg>"
};
var getIcon = function (icon) { return icons[icon]; };
var KEY_USERNAME = 'username', KEY_LOCATION = 'location', SVG_STRUCTURE = "<svg class=\"feather\"><use xlink:href=\"img/feather-icons.svg#{{code}}\"/></svg>", API_KEY = 'a11c099d3dfac008f325d806a2e8e43f', DARK_SKY = "https://api.darksky.net/forecast/" + API_KEY + "/";
var local_storage = window.localStorage, session_storage = window.sessionStorage, username = null, user_location = null, location_available = true, currentDate = new Date(), current_weather = null, loader = document.getElementById('loading');
// Overcome CORS on localhost
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
var FtoC = function (f) { return Math.round((f - 32) * 0.5556).toString(); };
var CtoF = function (c) { return Math.round((c * 1.8) + 32).toString(); };
var createElement = function (dom_string) {
    var template = document.createElement('template');
    template.innerHTML = dom_string.trim();
    return template.content.firstChild;
};
var getUserLocation = function (usr_pos) {
    if (navigator.geolocation && usr_pos === null) {
        return new Promise(function (resolve, reject) { return (navigator.geolocation.getCurrentPosition(resolve, reject)); });
    }
    else {
        if (usr_pos !== null) {
            return new Promise(function (resolve) { return resolve(JSON.parse(usr_pos)); });
        }
        else {
            return new Promise(function (resolve) { return resolve({}); });
        }
    }
};
var updateHeader = function () {
    var domDestination = document.querySelector('header.appbar .details .datetime-location'), temp = document.querySelector('header .temp span');
    if (domDestination !== null) {
        var currentSvg = document.querySelector('header.appbar .details .feather'), parent_1 = domDestination.parentNode;
        if (parent_1 !== null) {
            var hour = currentDate.getHours(), re = new RegExp('{{code}}', 'g'), icon = hour > 18 || hour < 6 ? 'moon' : 'sun', svg_struct = getIcon(icon), svg_dom = createElement(svg_struct);
            // console.log(svg_struct);
            if (svg_dom !== null) {
                if (currentSvg) {
                    currentSvg.remove();
                }
                parent_1.insertBefore(svg_dom, domDestination);
            }
        }
    }
    if (temp && current_weather) {
        temp.innerHTML = FtoC(current_weather.currently.temperature);
    }
};
var setupApp = function () { return new Promise(function (resolve) {
    username = local_storage.getItem(KEY_USERNAME);
    user_location = session_storage.getItem(KEY_LOCATION);
    // session_storage.clear();
    getUserLocation(user_location)
        .then(function (position) {
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
            };
            session_storage.setItem(KEY_LOCATION, JSON.stringify(user_location));
        }
    })
        .catch(function (e) { return console.error('Location', e); })
        .then(function () {
        var url = DARK_SKY + (user_location.coords.latitude + "," + user_location.coords.longitude);
        return AJAX(url)
            .then(function (data) {
            current_weather = data;
            console.log('Dark Sky Data', current_weather);
            updateHeader();
        })
            .catch(function (e) { return console.error('Dark Sky Fetch', e); });
    })
        .catch(function (e) { return console.error('Dark Sky', e); })
        .then(function () {
        resolve();
    });
}); };
setupApp()
    .then(function () {
    if (loader) {
        loader.classList.add('loaded');
    }
    // Remove Loading Animation
    console.log('Application Ready', username);
    console.log('Application Location', user_location);
})
    .catch(function (error) { return console.error('Error', error); });
