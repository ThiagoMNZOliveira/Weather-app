

import { useState } from 'react'
import './App.css'


// components
import Temperature from './components/Temperature/Temperature'
import DayTemperature from './components/DayTemperature/DayTemperature'
import WeekTemperature from './components/WeekTemperature/WeekTemperature'
import Search from './components/Search/Search'



function App() {

  const [city, setCity] = useState(null)

  const handleOnSearchChange = (searchData) => {
    setCity(searchData.label)
    const [latitude, longitude] = searchData.value.split(' ')

    const currentWheatherFetch = fetch(`${import.meta.env.VITE_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WHEATHER_API_KEY}`)

    const forecastFetch = fetch(`${import.meta.env.VITE_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WHEATHER_API_KEY}`)

    Promise.all([currentWheatherFetch, forecastFetch])

  }


  return (
    <div className="App">
      <div className='container'>
        <div className='search'>
          <Search onSearchChange={handleOnSearchChange} />
        </div>
        <div className='wheather'>
          {city && (<>
            <Temperature cityName={city} />
            <DayTemperature />
            <WeekTemperature />
          </>)}
        </div>
      </div>
    </div>
  )
}

export default App
