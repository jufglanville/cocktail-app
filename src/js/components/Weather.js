import axios from 'axios';
import { apiKeys } from './Base';


export default class Weather {
    constructor() {
    }

    async getWeather(latitude, longitude) {
        try {
            const res = await axios(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKeys.weather}`);
            this.result = res;
        } catch (error) {
            alert(error);
        }
    }
}