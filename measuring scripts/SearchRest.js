// ==UserScript==
// @name      SearchRest
// @namespace Rest
// @match        file:///C:/Users/Isak/Documents/GitHub/Examensarbete/websites/rest-app.html
// @version   1
// @grant     none
// @require   https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @require   http://cms.webug.se/grupp8/Random-Number-Generator-master/seededrandom.js
// ==/UserScript==

const cities = {
  3768399999: "London",
  7156099999: "Paris",
  8221099999: "Madrid",
  10385099999: "Berlin",
  12566099999: "Krakow",
  54511099999: "Beijing",
  62366099999: "Cairo",
  71624099999: "Toronto",
  72494023234: "San Francisco",
  72520094823: "Pittsburgh",
  72528014733: "Buffalo",
  94767099999: "Sydney"
};

function getRandomDate(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(randomTime);
}

let numSearch = parseInt(prompt("How many searches?"));
let seed = parseInt(prompt("What seed?"));

//initializes csv
localStorage.setItem("csvData","City,Date,ElapsedTime,startSearch,endSearch\n");

function Search(){
    if (numSearch <= 0) {
            console.log("Searches complete.");
            return;
        }

    Math.setSeed(parseInt(seed));

    //pick a random city and date
    const randomCityId = Object.keys(cities)[Math.floor(Math.random() * Object.keys(cities).length)];
    const randomCityName = cities[randomCityId];
    const randomDate = getRandomDate("2014-01-01", "2023-09-23");
    seed++;

    //input the city and date
    $('#city').val(randomCityId);
    $('#start_date').val(randomDate.toISOString().split('T')[0]);

    //store city/date in local storage
    localStorage.setItem('currentCity',randomCityName);
    localStorage.setItem('currentDate',randomDate.toISOString().split('T')[0]);

    //take the time and store it and then start the search
    let startTime = performance.timeOrigin + performance.now();
    localStorage.setItem('startTime', startTime);
    $('#fetchDataBtn').click();

    numSearch--;
}

//runs the function repeatedly with delay
setInterval(Search, 300)

