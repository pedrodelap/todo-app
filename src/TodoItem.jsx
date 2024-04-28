import React from 'react'

export const TodoItem = ({key, text, completed}) => {
    return (
        <li>
            <span>V</span>
            <p>{text}</p>
            <span>X</span>
        </li>
  )
}
