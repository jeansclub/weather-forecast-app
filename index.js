                   //CALLING FUNCTIONS

document.getElementById("submit-btn").addEventListener("click", function() {
    
    valueTest();
    btnShadowTogle();
    rmvSrcShadow();
});

document.getElementById("search-location").addEventListener("click", srcShadowTogle);




             //LIST OF VARIABLES

const mySearch = document.getElementById("search-location");
const myLocation = document.querySelector(".location");

let weatherLocation = "Ado Ekiti";



//-----------------------------------------------------------------------------------------------

function btnShadowTogle() {

    var btnInput = document.getElementById("submit-btn");

    btnInput.classList.add("box-shadow");

    setTimeout(() => {
        btnInput.classList.remove("box-shadow");
    }, 600);
}

//-----------------------------------------------------------------------------------------------

function srcShadowTogle() {
    var searchInput = document.getElementById("search-location");
    searchInput.classList.toggle("box-shadow");
}

//-----------------------------------------------------------------------------------------------

function rmvSrcShadow() {
    var searchInput = document.getElementById("search-location");
    if (searchInput.classList.contains("box-shadow")) {
        searchInput.classList.remove("box-shadow");
    }
}

//-----------------------------------------------------------------------------------------------

function valueTest() {
    weatherLocation = mySearch.value;

    fectchResult(weatherLocation);
}

//-----------------------------------------------------------------------------------------------

async function fectchResult(target) {
    
    const url = "http://api.weatherapi.com/v1/current.json?key=9b99f40c7b0341bcbe0211219232509&q="+target+"&aqi=no";
    const res = await fetch(url);
    const data = await res.json();

    
    document.querySelector(".location").innerHTML = data.location.name;
    document.querySelector(".time").innerHTML = data.location.localtime;
    document.querySelector(".weather-icon").src = "http:" + data.current.condition.icon;
    document.querySelector(".weather-msg").innerHTML = data.current.condition.text;
    document.querySelector(".temp-f").innerHTML = data.current.temp_f + "°F";
    document.querySelector(".temp-c").innerHTML = data.current.temp_c + "°C";
    document.querySelector(".cloud").innerHTML = data.current.cloud;
    document.querySelector(".pressure").innerHTML = "Pressure: " + data.current.pressure_mb + " Mb";
    document.querySelector(".humidity").innerHTML = "Humidity: " + data.current.humidity + " %";
    document.querySelector(".wind").innerHTML = "Wind: " + data.current.wind_kph + " Km/H";

    console.log(data);
}

fectchResult(weatherLocation);

/*function weatherForecast() {
    for (let index = 0; index < document.querySelectorAll(".forecast-temp-c").length; index++) {
        document.querySelectorAll(".forecast-temp-c")[index].innerText = index;
        
    }

    console.log(index);
}

weatherForecast();*/