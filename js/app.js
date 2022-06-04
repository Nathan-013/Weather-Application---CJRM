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

const fetchCityWeatherInfo = async city => {
  const [{ Key, LocalizedName }] = await getCityData(city)
  const [{ IsDayTime, WeatherText, Temperature, WeatherIcon }] = await
    getCityWeatherData(Key)

  return { LocalizedName, IsDayTime, WeatherText, Temperature, WeatherIcon }
}

const showCityWeather = async city => {
  
  const { LocalizedName, IsDayTime, WeatherText, Temperature, WeatherIcon } = 
    await fetchCityWeatherInfo(city)

  timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'
  timeIcon.innerHTML = `<img src="./src/icons/${WeatherIcon}.svg"/>`
  cityName.textContent = LocalizedName
  cityWeather.textContent = WeatherText
  cityTemperature.textContent = Temperature.Metric.Value
}

const handleFormSubmit = event => {
  event.preventDefault()

  const city = event.target.city.value 
  
  showCityCard()
  showCityWeather(city)
  cityForm.reset()
}

cityForm.addEventListener('submit', handleFormSubmit)