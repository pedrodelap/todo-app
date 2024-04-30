import React from 'react';
import '../css/CreateTodoButton.css'

export const CreateTodoButton = () => {
    return (
        <button
            className='CreateTodoButton'
            onClick={ (e) => { 
                console.log("click en: ", e);
                console.log(e.target);
            }}
        > + </button>
    )
}
