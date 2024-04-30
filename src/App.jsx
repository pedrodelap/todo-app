import React from 'react'
import { TodoCounter } from './Componets/TodoCounter'
import { TodoSearch } from './Componets/TodoSearch'
import { TodoItem } from './Componets/TodoItem'
import { TodoList } from './Componets/TodoList'
import { CreateTodoButton } from './Componets/CreateTodoButton'
import { useState } from 'react'

export const App = () => {

    const defaultTodos = [
        { text: 'Llegó el momento de actuar.', completed: true },
        { text: 'Leer un libro interesante.', completed: true },
        { text: 'Hacer ejercicio en casa.', completed: false },
        { text: 'El agua llama la atención del niño.', completed: false },
        { text: 'Organizar un espacio desordenado.', completed: false },
        { text: 'Revisar y archivar documentos importantes.', completed: true },
    ];

    const [todos, setTodos] = useState(defaultTodos);
    const [searchValue, setSearchValue] = useState('');

    const completedTodos = todos.filter(
        todo => !todo.completed
    ).length;

    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );

    console.log('Los usuarios buscan todos de ' + searchValue);


    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos}/>
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                { searchedTodos.map( todo => (
                    < TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
                ))}
            </TodoList>
            <CreateTodoButton />
        </>
    )
}