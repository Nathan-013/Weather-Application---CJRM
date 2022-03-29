const cityForm = document.querySelector('[data-js="city-form"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const cityName = document.querySelector('[data-js="city-name"]')
const cityWeather = document.querySelector('[data-js="city-weather"]')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')
const timeImg = document.querySelector('[data-js="time-img"]')
const timeIcon = document.querySelector('[data-js="time-icon"]')

const showCityCard = () => {
  if(cityCard.classList.contains('d-none')){
    cityCard.classList.remove('d-none')
  }
}

const insertWeatherInfoIntoDOM = async inputValue => {
  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ IsDayTime, WeatherText, Temperature, WeatherIcon }] = await
    getCityWeatherData(Key)
    
  timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'
  timeIcon.innerHTML = `<img src="./src/icons/${WeatherIcon}.svg"/>`
  cityName.textContent = LocalizedName
  cityWeather.textContent = WeatherText
  cityTemperature.textContent = Temperature.Metric.Value
}

cityForm.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.city.value 
  
  showCityCard()
  insertWeatherInfoIntoDOM(inputValue)
  cityForm.reset()
})