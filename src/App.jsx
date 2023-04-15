import { useState } from 'react'

import './App.css'


// components
import Temperature from './components/Temperature/Temperature'
import DayTemperature from './components/DayTemperature/DayTemperature'
import WeekTemperature from './components/WeekTemperature/WeekTemperature'
import Search from './components/Search/Search'

function App() {


  return (
    <div className="App">
      <div className='container'>
        <Search />
        <Temperature />
        <DayTemperature />
        <WeekTemperature />
      </div>
    </div>
  )
}

export default App
