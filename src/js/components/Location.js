export default class Location {
    constructor() {
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition((res) => {
            this.latitude = Math.round(res.coords.latitude);
            this.longitude = Math.round(res.coords.longitude);
        });
    }
}