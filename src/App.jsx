import React from 'react'
import { TodoCounter } from './Componets/TodoCounter'
import { TodoSearch } from './Componets/TodoSearch'
import { TodoItem } from './Componets/TodoItem'
import { TodoList } from './Componets/TodoList'
import { CreateTodoButton } from './Componets/CreateTodoButton'

export const App = () => {

    const defaultTodos = [
        { text: 'Llegó el momento de actuar.', completed: true },
        { text: 'Leer un libro interesante.', completed: false },
        { text: 'Hacer ejercicio en casa.', completed: false },
        { text: 'El agua llama la atención del niño.', completed: false },
        { text: 'Organizar un espacio desordenado.', completed: false },
        { text: 'Revisar y archivar documentos importantes.', completed: true },
    ];
    
    return (
        <>
            <TodoCounter completed={2} total={6}/>

            <TodoSearch />

            <TodoList>
                { defaultTodos.map( todo => (
                    < TodoItem  text={todo.text} completed={todo.completed}/>
                ))}
            </TodoList>

            <CreateTodoButton />
            
        </>
    )
}