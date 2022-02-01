// // single day forecast
// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: WEATHERMAP_TOKEN,
//     q:     "San Antonio, US",
//     units: "imperial"
// }).done(function(data) {
//     console.log(data);
//     let city = data.name;
//     let tempHigh = data.main.temp_max;
//     let tempLow = data.main.temp_min;
//     let weather = data.weather[0].description;
//     let humidity = data.main.humidity;
//     let wind = data.wind.speed;
//     let pressure = data.main.pressure;
//     $(".container").append(`
//         <h3>${city} Weather</h3>
//         <p>High: ${tempHigh}°F / Low: ${tempLow}°F</p>
//         <p>Description: ${weather}</p>
//         <p>Humidity: ${humidity}%</p>
//         <p>Wind speed: ${wind} mph</p>
//         <p>Pressure: ${pressure} hPa</p>
//     `)
// });

// 5-day forecast
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: WEATHERMAP_TOKEN,
    q: "San Antonio, US",
    units: "imperial"
}).done(function (data) {
    console.log(data)
    let city = data.city.name;
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
                    <img src="http://openweathermap.org/img/w/${icon}.png" alt="weather icon">
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