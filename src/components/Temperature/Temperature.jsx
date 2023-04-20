import './Temperature.css'
import { IoLocationSharp } from 'react-icons/io5'

const Temperature = ({ data }) => {
  return (
    <div className='temperature-container'>
      <div className='info'>
        <div>
          <p className='localization'>{data.city}<IoLocationSharp className='IoLocationSharp'></IoLocationSharp></p>
          <p className='description'>{data.weather[0].description[0].toUpperCase()+data.weather[0].description.slice(1)}</p>
        </div>
        <p className='temperature'>{Math.round(data.main.temp)}ºC</p>
        <p className='feeling'>{Math.round(data.main.temp_max)}ºC / {Math.round(data.main.temp_min)}ºC Sensação térmica de {Math.round(data.main.feels_like)}ºC</p>
      </div>
      <div className='icon'>
        <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`} />
      </div>
    </div>
  )
}

export default Temperature
