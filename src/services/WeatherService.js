import axios from 'axios';

class WeatherService {
  getWeather() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          axios
            .get(
              `https://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civil&output=json`
            )
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        },
        (error) => reject(error)
      );
    });
  }
}

export default new WeatherService();
