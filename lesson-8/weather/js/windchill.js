function getWindchill() {

    let temp = document.getElementById('temp').innerHTML;
    let wind = document.getElementById('wind').innerHTML;

    let windchill = Math.round((35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16)));

    if (wind <= 3 || temp > 50) {
        windchill = temp;
    }

    let windDest = document.getElementById('windchill');

    windDest.innerHTML = windchill;
}

getWindchill();
