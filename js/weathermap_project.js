// 5-day forecast
$.get("https://api.openweathermap.org/data/2.5/forecast", {
    APPID: WEATHERMAP_TOKEN,
    lat: 29.4252,
    lon: -98.4916,
    units: "imperial"
}).done(function (data) {
    console.log(data)
    let city = data.city.name;
    $(".navbar-text").append(`Current city: ${city}`)
    for (i = 0; i < data.list.length; i+= 8) {
        console.log(data.list[i]);
        let date = data.list[i].dt_txt;
        let tempHigh = data.list[i].main.temp_max;
        let tempLow = data.list[i].main.temp_min;
        let weather = data.list[i].weather[0].description;
        let humidity = data.list[i].main.humidity;
        let wind = data.list[i].wind.speed;
        let pressure = data.list[i].main.pressure;
        let icon = data.list[i].weather[0].icon;
        $(".card-group").append(`
            <div class="card">
                <div class="card-header text-center">${date}</div>
                <div class="card-body text-center">
                    <h6>High: ${tempHigh}°F / Low: ${tempLow}°F</h6>
                    <img src="https://openweathermap.org/img/w/${icon}.png" alt="weather icon">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Description: ${weather}</li>
                    <li class="list-group-item">Humidity: ${humidity}%</li>
                    <li class="list-group-item">Wind: ${wind} mph</li>
                    <li class="list-group-item">Pressure: ${pressure} hPa</li>
                </ul>
            </div>
        `)
    }
})

// creates map centered on San Antonio
mapboxgl.accessToken = MAPBOX_EXERCISE;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});
let marker = new mapboxgl.Marker();

function add_marker (event) {
    let coordinates = event.lngLat;
    console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
    marker.setLngLat(coordinates).addTo(map);
}

map.on('click', add_marker);

// allow user to drop pin anywhere on map
// click on map and create marker
// get coordinates from marker and feed into 5 day forecast