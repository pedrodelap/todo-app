import React from 'react'
import '../css/TodoItem.css'

export const TodoItem = ({key, text, completed}) => {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
                V
            </span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {text}
            </p>
            <span className="Icon Icon-delete">
                X
            </span>
        </li>
  )
}
