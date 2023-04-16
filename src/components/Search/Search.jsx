import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

import { GEO_API_URL, geoAPIOptions } from '../../api'


import { MdSearch } from 'react-icons/md'
import './Search.css'


const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const handleChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)

    }


    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoAPIOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }


    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            width: '380px',
            height: '40px',
            borderRadius: '15px',
            border: '2px solid #ccc',
            boxShadow: state.isFocused ? '0 0 0 2px #3699FF' : null,
            
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#3699FF' : null,
            color: state.isFocused ? 'white' : null,
        
        }),
    }

    return (
        <div className='search-container'>

            <AsyncPaginate
                placeholder='Search for city'
                debounceTimeout={600}
                value={search}
                onChange={handleChange}
                loadOptions={loadOptions}
                styles={customStyles}
            />
        </div>

    )
}

export default Search