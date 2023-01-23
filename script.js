const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ae844a733fmsh7bb7e985319f82dp1e2680jsn90d065568aab',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityname.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            console.log(response)
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", function (e) {
    e.preventDefault()
    getWeather(city.value);

    });

getWeather("unnao");

   