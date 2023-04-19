

import { useState } from 'react'
import './App.css'


// components
import Temperature from './components/Temperature/Temperature'
import DayTemperature from './components/DayTemperature/DayTemperature'
import WeekTemperature from './components/WeekTemperature/WeekTemperature'
import Search from './components/Search/Search'



function App() {

  const [currentWeater, setCurrentWeater] = useState(null)
  const [forecast, setForecast] = useState(null)


  const handleOnSearchChange = (searchData) => {
    
    const [latitude, longitude] = searchData.value.split(' ')

    const currentWeaterFetch = fetch(`${import.meta.env.VITE_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)

    const forecastFetch = fetch(`${import.meta.env.VITE_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)

    Promise.all([currentWeaterFetch, forecastFetch])
      .then(async (reponse) => {
        const weaterResponse = await reponse[0].json()
        const forecastResponse = await reponse[1].json()

        setCurrentWeater({ city: searchData.label, ...weaterResponse })
        setForecast({ city: searchData.label, ...forecastResponse })

      })
      .catch((err) => console.log(err))

  }

  console.log(currentWeater, forecast)

  return (
    <div className="App">
      <div className='container'>
        <div className='search'>
          <Search onSearchChange={handleOnSearchChange} />
        </div>
        <div className='weater'>
          {currentWeater && (<>
            <Temperature data={currentWeater}/>
            <DayTemperature />
            <WeekTemperature />
          </>)}
        </div>
      </div>
    </div>
  )
}

export default App
