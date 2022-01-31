// single day forecast
$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: WEATHERMAP_TOKEN,
    q:     "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    console.log(data);
    let city = data.name;
    let tempHigh = data.main.temp_max;
    let tempLow = data.main.temp_min;
    let weather = data.weather[0].description;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;
    let pressure = data.main.pressure;
    $(".container").append(`
        <h3>${city} Weather</h3>
        <p>High: ${tempHigh}°F / Low: ${tempLow}°F</p>
        <p>Description: ${weather}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind speed: ${wind} mph</p>
        <p>Pressure: ${pressure} hPa</p>
    `)
});