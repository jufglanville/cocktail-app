import axios from 'axios';
import { apiKeys } from './Base';

export default class Weather {
    constructor(userLocation) {
        this.userLocation = userLocation;
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((res) => {
                this.latitude = res.coords.latitude;
                this.longitude = res.coords.longitude;
            });
        } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    async getWeather() {
        try {
            const res = await axios(`api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${apiKey.Weather}`);
            this.result = res;
        } catch (error) {
            alert(error);
        }
    }
}