import { MdSearch } from 'react-icons/md'
import './Search.css'
import { useState } from 'react'

const Search = () => {

    const [city, setCity] = useState('');


    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(city)
    }



    return (
        <div className='search-container'>

            <input
                type="text"
                id='city'
                name='city'
                onChange={handleChange}
                value={city}
                placeholder="Search city"
            />
            <button type='submit' onClick={handleSubmit}><MdSearch /></button>


        </div>
    )
}

export default Search