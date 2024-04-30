import React from 'react'
import '../css/TodoCounter.css'

export const TodoCounter = ({completed, total}) => {
    return (
        <h1 className='TodoCounter'>
            Has complet <span>{completed}</span> de <span>{total}</span> To-Do's
        </h1>
    )
}
