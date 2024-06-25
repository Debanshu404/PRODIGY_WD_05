const apiKey="8448d8070fc9c55e118c3b11c2c4ce0b"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector('.search-input')
const searchBtn=document.querySelector('.search-button')
const weatherIcon=document.querySelector('.weather-icon');

async function checkweather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    const data=await response.json();
    // console.log(data);
    if(response.status=== 404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else{
          document.querySelector(".error").style.display="none"
    }
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=data.main.temp +`°C`;
    document.querySelector('.temp'). innerHTML=data.main.temp +`°C`;
    document.querySelector('.Wind').innerHTML=data.wind.speed+`km/h`;
    document.querySelector('.humidity').innerHTML=data.main.humidity+`%`
if(data.weather[0].main=="Clouds"){weatherIcon.src="images/clouds.png"}
else if(data.weather[0].main=="Clear"){weatherIcon.src="images/clear.png"}
else if(data.weather[0].main=="Rain"){weatherIcon.src="images/rain.png"}
else if(data.weather[0].main=="Drizzle"){weatherIcon.src="images/drizzle.png"}
else if(data.weather[0].main=="Mist"){weatherIcon.src="images/mist.png"}

document.querySelector(".weather").style.display="block"
}
searchBtn.addEventListener('click',function(){

    checkweather(searchbox.value)
})