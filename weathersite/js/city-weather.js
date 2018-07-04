const greenvilleID = '4469160';
const franklinID = '4156210';
const springfieldID = '4951788';
const imgPath = 'http://openweathermap.org/img/w/';
const imgTag = '.png';
const currentWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?id=';
const APIKey = '&APPID=43316cb587d40d9655e6a6c098281d01';
const options = '&units=imperial';

function getWindchill(temp, wind) {

    let windchill = Math.round((35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16)));

    if (wind <= 3 || temp > 50) {
        windchill = temp;
    }

    let windDest = document.getElementById('windchill');

    windDest.innerHTML = windchill;
}

function convertWindDeg(deg) {
    var val = Math.floor((deg / 45));
    var arr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return arr[(val % 8)];
}


function getCurrentWeather(city) {
    let weatherObject = new XMLHttpRequest();
    weatherObject.open('GET', currentWeatherURL + city + APIKey + options, true);

    weatherObject.send();

    weatherObject.onload = function () {
        let weatherInfo = JSON.parse(this.responseText);
        console.log(weatherInfo)

        document.getElementById('city-name').innerHTML = weatherInfo.name;
        document.getElementById('highTemp').innerHTML = weatherInfo.main.temp_max;
        document.getElementById('lowTemp').innerHTML = weatherInfo.main.temp_min;
        document.getElementById('weather').innerHTML = weatherInfo.weather[0].main;
        document.getElementById('wind').innerHTML = weatherInfo.wind.speed;
        document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;

        let windDirection = convertWindDeg(weatherInfo.wind.deg);

        console.log(windDirection);

        document.getElementById('wind-direction').innerHTML = windDirection;


        const img = imgPath + weatherInfo.weather[0].icon + imgTag;
        document.getElementById('weather-icon').src = img;

        getWindchill(weatherInfo.main.temp_min, weatherInfo.wind.speed);
    }
}

let path = window.location.pathname;

let indexStart = path.lastIndexOf('/') + 1;
let indexEnd = path.lastIndexOf('.');

let page = path.slice(indexStart, indexEnd);


switch (page) {
    case 'franklin':
        getCurrentWeather(franklinID);
        break;
    case 'springfield':
        getCurrentWeather(springfieldID);
        break;
    case 'greenville':
        getCurrentWeather(greenvilleID);
};
