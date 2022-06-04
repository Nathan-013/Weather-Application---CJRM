const APIKey = 'x0N2H8eNCYLGv7p6wycM1cj379toOwMH'
const defaultURL = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName => 
  `${defaultURL}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherURL = cityKey =>
  `${defaultURL}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
  try{
    const request = await fetch(url)
    
    if(!request.ok) {
      throw new Error('Não foi possível acessar os dados')
    }
  
    return await request.json()
  }catch (error) {
    alert(error.message)
  }
} 

const getCityData = city => fetchData(getCityUrl(city))
const getCityWeatherData = cityKey => fetchData(getWeatherURL(cityKey))