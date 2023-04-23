import './WeekTemperature.css'
import { IoIosWater } from 'react-icons/io'


const WeekTemperature = ({ data }) => {

  const getDayOfWeek = (date) => {
    const dayOfWeek = new Date(date).getUTCDay();
    return isNaN(dayOfWeek) ? null :
      ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][dayOfWeek];
  }
  const forecastDays = [];

  const days = data.list.map((item) => {
    const day = getDayOfWeek(item.dt_txt.slice(0, 10));
    return forecastDays.includes(day) ? null : forecastDays.push(day);
  })


  return (
    <div className='week-temperature-container'>
      {data.list.map((item, index) => {
        return index > 4 ? null : (
          <div key={index} className='week-forecast'>
            <div className='details'>
              <span className='week-day'>{index === 0 ? 'Hoje' : forecastDays[index]}</span>
              <span className='week-humidity'><IoIosWater />{item.main.humidity}%</span>
            </div>
            <span className='icon'><img alt='weather icon' src={`icons/${item.weather[0].icon}.png`} /></span>
            <span className='temp'>{Math.round(item.main.temp_max)}º / {Math.round(item.main.temp_min)}º</span>
          </div>)
      })}

    </div>
  )
}

export default WeekTemperature