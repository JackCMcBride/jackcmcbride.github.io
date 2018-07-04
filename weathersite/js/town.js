const url = 'https://byui-cit230.github.io/weather/data/towndata.json';



function getTownData() {

    let franklin;
    let greenville;
    let springfield;

    let townObject = new XMLHttpRequest();
    townObject.open('GET', url, true);

    townObject.send();

    townObject.onload = function () {

        let townInfo = JSON.parse(this.responseText);
        console.log(townInfo.towns);

        for (let i = 0; i < townInfo.towns.length; i++) {

            switch (townInfo.towns[i].name) {
                case 'Franklin':
                    franklin = townInfo.towns[i];
                    break;
                case 'Greenville':
                    greenville = townInfo.towns[i];
                    break;
                case 'Springfield':
                    springfield = townInfo.towns[i];
            }
        };

        console.log(franklin);
        console.log(springfield);
        console.log(greenville);

        document.getElementById('franklin-motto').innerHTML = franklin.motto;

        document.getElementById('franklin-year-founded').innerHTML = franklin.yearFounded;

        document.getElementById('franklin-annual-rainfall').innerHTML = franklin.averageRainfall;

        document.getElementById('franklin-population').innerHTML = franklin.currentPopulation;

        document.getElementById('springfield-motto').innerHTML = springfield.motto;

        document.getElementById('springfield-year-founded').innerHTML = springfield.yearFounded;

        document.getElementById('springfield-annual-rainfall').innerHTML = springfield.averageRainfall;

        document.getElementById('springfield-population').innerHTML = springfield.currentPopulation;

        document.getElementById('greenville-motto').innerHTML = greenville.motto;

        document.getElementById('greenville-year-founded').innerHTML = greenville.yearFounded;

        document.getElementById('greenville-annual-rainfall').innerHTML = greenville.averageRainfall;

        document.getElementById('greenville-population').innerHTML = greenville.currentPopulation;
    }
}

getTownData();
