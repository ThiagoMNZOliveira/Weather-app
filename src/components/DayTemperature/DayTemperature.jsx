import './DayTemperature.css'
import { IoIosWater } from 'react-icons/io'

const DayTemperature = ({ data }) => {
  return (
    <div className='day-temperature-container'>
      {data.list.map((item, index) => {
        return index >= 10 ? null : (
          <div key={index} className='forecast-container'>
            <p className='time'>{item.dt_txt.slice(10, 16)}</p>
            <div className='icon'>
              <img alt='weather icon' className='weather-icon' src={`icons/${item.weather[0].icon}.png`} />
            </div>
            <p className='temp'>{Math.round(item.main.temp)}º</p>
            <p className='humidity'><IoIosWater/> {item.main.humidity}%</p>
          </div>)
      })
      }
    </div >
  )
}

export default DayTemperature