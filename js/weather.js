const API_KEY = "a946dc473d5a2fbbbf96a3f65a8ebb9d";

function onGeoSucess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in ", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            const icon = data.weather[0].icon;
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} ${data.main.temp}°C`;
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);