import React from 'react'
import { TodoCounter } from './src/TodoCounter'
import { TodoSearch } from './src/TodoSearch'

import { TodoItem } from './src/TodoItem'
import { TodoList } from './src/TodoList'

export const App = () => {
    return (
        <>
            <TodoCounter />

            <TodoSearch />

            <TodoList>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </TodoList>
            
        </>
    )
}
