import './Temperature.css'
import { IoLocationSharp } from 'react-icons/io5'
import { BsFillSunFill } from 'react-icons/bs'

const Temperature = () => {
  return (
    <div className='temperature-container'>
      <div className='info'>
        <span className='temperature'>30º</span>
        <span className='localization'>Algum Lugar <IoLocationSharp className='IoLocationSharp'></IoLocationSharp></span>
        <span className='feeling'>31º / 25° Sensação térmica de 34°</span>
      </div>
      <div className='icon'>
        <BsFillSunFill />
      </div>
    </div>
  )
}

export default Temperature
