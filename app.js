// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
    key: "0f6672a9f4aae9b11b27545a23d5f1de",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

  //  document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?city')";/*

    
    if(weatherType.textContent == 'Clear') {
      //  document.body.style.backgroundImage = "url('images/clear.jpg')";
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?clear_cloud')"
        
    } else if(weatherType.textContent == 'Clouds') {

      //  document.body.style.backgroundImage = "url('images/cloud.jpg')";
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?clouds')"
        
    } else if(weatherType.textContent == 'Haze') {

      //  document.body.style.backgroundImage = "url('images/cloud.jpg')";
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?haze')"
        
    }     else if(weatherType.textContent == 'Rain') {
        
      //  document.body.style.backgroundImage = "url('images/rain.jpg')";
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?rain')"
        
    } else if(weatherType.textContent == 'Snow') {
        
     //   document.body.style.backgroundImage = "url('images/snow.jpg')";
     document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?snow')"
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
     //   document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
     document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?thunderstorm')"
        
    } 
    
 
}

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}



