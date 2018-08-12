const KEY_USERNAME: string = 'username',
    KEY_LOCATION: string = 'location'

let local_storage: Storage = window.localStorage,
    session_storage: Storage = window.sessionStorage,
    username: string|null = null,
    user_location: string|null|object|Position = null,
    location_available: boolean = true,
    currentDate = new Date()

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
        })
        .catch(e => console.error('Location', e))
        .then(() => {
            resolve()
        })
})

setupApp()
    .then(() => {
        // Remove Loading Animation
        console.log('Application Ready', username)
        console.log('Application Location', user_location)
    })
    .catch(error => console.error('Error', error))