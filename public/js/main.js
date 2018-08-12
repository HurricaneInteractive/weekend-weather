"use strict";
var KEY_USERNAME = 'username', KEY_LOCATION = 'location';
var local_storage = window.localStorage, session_storage = window.sessionStorage, username = null, user_location = null, location_available = true, currentDate = new Date();
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
        console.log('Get Weather Details...');
    })
        .catch(function (e) { return console.error('Location', e); })
        .then(function () {
        resolve();
    });
}); };
setupApp()
    .then(function () {
    // Remove Loading Animation
    console.log('Application Ready', username);
    console.log('Application Location', user_location);
})
    .catch(function (error) { return console.error('Error', error); });
