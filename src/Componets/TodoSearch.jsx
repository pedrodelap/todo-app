import React from 'react';
import '../css/TodoSearch.css'

export const TodoSearch = ({searchValue, setSearchValue}) => {
    return (
        <input
            className='TodoSearch'
            placeholder="Search To-Do"
            value={searchValue}
            onChange={ (e) => { setSearchValue(e.target.value); }}         
        />
    )
}
