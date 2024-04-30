import React from 'react'
import '../css/TodoList.css'

export const TodoList = ({ children }) => {
    return (
        <ul className="TodoList">

            {children}

        </ul>
    )
}
