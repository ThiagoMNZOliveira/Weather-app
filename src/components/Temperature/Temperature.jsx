import './Temperature.css'
import { IoLocationSharp } from 'react-icons/io5'

const Temperature = ({ cityName }) => {
  return (
    <div className='temperature-container'>
      <div className='info'>
        <div>
          <p className='localization'>{cityName}<IoLocationSharp className='IoLocationSharp'></IoLocationSharp></p>
          <p className='description'>Sunny</p>
        </div>
        <p className='temperature'>30ºC</p>
        <p className='feeling'>31º / 25° Sensação térmica de 34°</p>
      </div>
      <div className='icon'>
        <img alt='wheather' className='wheather-icon' src='icons/01d.png' />
      </div>
    </div>
  )
}

export default Temperature
