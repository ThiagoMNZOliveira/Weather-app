

import { useState } from 'react'
import './App.css'


// components
import Temperature from './components/Temperature/Temperature'
import DayTemperature from './components/DayTemperature/DayTemperature'
import WeekTemperature from './components/WeekTemperature/WeekTemperature'
import Search from './components/Search/Search'



function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)


  const handleOnSearchChange = (searchData) => {
    
    const [latitude, longitude] = searchData.value.split(' ')

    const currentWeatherFetch = fetch(`${import.meta.env.VITE_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)

    const forecastFetch = fetch(`${import.meta.env.VITE_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (reponse) => {
        const weatherResponse = await reponse[0].json()
        const forecastResponse = await reponse[1].json()

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...forecastResponse })

      })
      .catch((err) => console.log(err))

  }

  console.log(currentWeather, forecast)

  return (
    <div className="App">
      <div className='container'>
        <div className='search'>
          <Search onSearchChange={handleOnSearchChange} />
        </div>
        <div className='weather'>
          {currentWeather && (<>
            <Temperature data={currentWeather}/>
            <DayTemperature />
            <WeekTemperature />
          </>)}
        </div>
      </div>
    </div>
  )
}

export default App
