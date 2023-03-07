import './Temperature.css'
import { IoLocationSharp } from 'react-icons/io5'

const Temperature = () => {
  return (
    <div className='container'>
      <div className='info'>
        <span className='temperature'>30º</span>
        <span className='localization'>Algum Lugar <IoLocationSharp className='IoLocationSharp'></IoLocationSharp></span>
        <span className='feeling'>31º / 25° Sensação térmica de 34°</span>
      </div>
      <div className='icon'>
        icon
      </div>
    </div>
  )
}

export default Temperature
