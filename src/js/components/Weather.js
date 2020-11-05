import axios from 'axios';
import { apiKeys } from './Base';

// const getLocation = async () => {
//     navigator.geolocation.getCurrentPosition((res) => {
//         state.weather.latitude = Math.round(res.coords.latitude);
//         state.weather.longitude = Math.round(res.coords.longitude);
//         console.log(`getLocation Function ${state.weather.latitude}`);
//         console.log(`getLocation Function ${state.weather.longitude}`);
//     });
// }

const getLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((res) => {
        state.weather.latitude = Math.round(res.coords.latitude);
        state.weather.longitude = Math.round(res.coords.longitude);
    })
}


export default class Weather {
    constructor() {
    }

    async getWeather() {
        try {
            getLocation()
            .then(() => {
                const res = await axios(`http://api.openweathermap.org/data/2.5/weather?lat=${state.weather.latitude}&lon=${state.weather.longitude}&appid=${apiKeys.weather}`);
                this.result = res;
            })

            console.log(`getWeather Function ${state.weather.latitude}`);
            console.log(`getWeather Function ${state.weather.longitude}`);




        } catch (error) {
            alert(error);
        }
    }
}