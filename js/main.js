fetch('https://api.openweathermap.org/data/2.5/weather?lat=54,6095&lon=39,7126&appid=97d633b89ecd02aa6ad8ecbe27cae97f')
.then(function(resp){return resp.json()})
.then(function(data){
    console.log(data)
document.querySelector('.city').textContent = data.name
document.querySelector('.temp').textContent = Math.round(data.main.temp -273)
document.querySelector('.weather').textContent = data.weather[0]['description']
document.querySelector('.icon').innerHTML = `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`
document.querySelector('.wind-speed').textContent = data.wind.speed
document.querySelector('.humidity').textContent = data.main.humidity
document.querySelector('.country').innerHTML = data.sys.country
document.querySelector('.sunrise').innerHTML = data.sys.sunrise
document.querySelector('.sunset').innerHTML = data.sys.sunset
})