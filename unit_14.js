fetch('https://api.openweathermap.org/data/2.5/weather?id=709930&appid=5f9d54a2c09413fd741de8710c32d815')
    .then( function(resp) { return resp.json() })
    .then( function(data) {
        console.log(data);
        
        let forecastCity = document.querySelector('.forecast-city');
        let forecastIcon = document.querySelector('.forecast-icon');
        let forecastDate = document.querySelector('.forecast-date');
        let currentDate = new Date();
        let forecastTemperature = document.querySelector('.forecast-temperature');
        let forecastScale = document.querySelector('.forecast-scale');

        forecastCity.textContent = data.name;

        forecastIcon.style.backgroundImage = `url("https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png")`;

        forecastDate.textContent = `${currentDate.toDateString()}`;
        forecastTemperature.textContent = `${Math.round(data.main.temp -273.15)}`;

        forecastScale.textContent = 'C';
        forecastScale.onclick = changeScale;

        function changeScale() {
            if (this.textContent === 'C') {
                this.textContent = 'F';
                forecastTemperature.textContent = `${data.main.temp}`;
            }
            else if (this.textContent === 'F') {
                this.textContent = 'C';
                forecastTemperature.textContent = `${Math.round(data.main.temp -273.15)}`;
            }
        }
    })
    .catch( function() {
        // catch any errors
    });