// store get requests in functions to be called
function createForecast(lat, lng) {
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: WEATHERMAP_TOKEN,
        lat: lat,
        lon: lng,
        units: "imperial"
    }).done(function (data) {
        console.log(data)
        let city = data.city.name;
        $(".navbar-text").append(`Current city: ${city}`)
        for (i = 0; i < data.list.length; i += 8) {
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
}

function replaceForecast(lat, lng) {
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: WEATHERMAP_TOKEN,
        lat: lat,
        lon: lng,
        units: "imperial"
    }).done(function (data) {
        console.log(data)
        let city = data.city.name;
        $(".navbar-text").html(`Current city: ${city}`)
        for (i = 0; i < data.list.length; i += 8) {
            console.log(data.list[i]);
            let date = data.list[i].dt_txt;
            let tempHigh = data.list[i].main.temp_max;
            let tempLow = data.list[i].main.temp_min;
            let weather = data.list[i].weather[0].description;
            let humidity = data.list[i].main.humidity;
            let wind = data.list[i].wind.speed;
            let pressure = data.list[i].main.pressure;
            let icon = data.list[i].weather[0].icon;
            if (i === 0) {
                $(".card-group").html(`
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
            } else {
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
        }
    })
}

// San Antonio coords
let latSA = 29.4252;
let lngSA = -98.4916;

// when page loads
$(document).ready(function () {
    // creates initial 5-day forecast for San Antonio
    createForecast(latSA, lngSA);
    // creates map centered on San Antonio
    mapboxgl.accessToken = MAPBOX_EXERCISE;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [lngSA, latSA]
    });
    // Add geocoder to the map.
    let geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        zoom: 11,
        marker: false
    });
    map.addControl(geocoder);
    let nav = new mapboxgl.NavigationControl({
        visualizePitch: true
    });
    map.addControl(nav, 'top-left');
    // any marker created will replace previous one
    let marker = new mapboxgl.Marker({
        draggable: true
    });

    function click_marker(event) {
        let coordinates = event.lngLat;
        console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
        marker.setLngLat(coordinates).addTo(map);
        map.flyTo({center: [coordinates.lng, coordinates.lat], zoom: 11});
        replaceForecast(coordinates.lat, coordinates.lng);
    }
    function search_marker(event) {
        console.log(event.result.center);
        let coordinates = event.result.center;
        marker.setLngLat(coordinates).addTo(map);
        replaceForecast(event.result.center[1], event.result.center[0]);
    }
    function drag_marker() {
        console.log(marker.getLngLat()); // returns object lng and lat
        let lng = marker.getLngLat().lng;
        let lat = marker.getLngLat().lat;
        map.flyTo({center: [lng, lat], zoom: 11});
        replaceForecast(lat, lng);
    }
    // creates marker and updates forecast on click
    map.on('click', click_marker);
    marker.on('dragend', drag_marker);
    // creates marker and updates forecast from geocoder
    geocoder.on('result', search_marker);
})