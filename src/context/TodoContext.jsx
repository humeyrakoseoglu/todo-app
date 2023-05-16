import React, {createContext, useContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid'; //random benzersiz id için uuid kütüphanesini kurduk

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([{
        id:1,
        text:'Learn React',
        completed: true,
    },
    {
        id:3,
        text:'Learn JS',
        completed: false,
    }
    ]);

    const addTodo = (text) => setTodos((prev) => [...prev, {id: uuidv4(), completed: false, text}]);

    const toggleTodo = (id) => {
        const cloned_todos = [...todos];
		const update_item_index = cloned_todos.findIndex(todo => todo.id === id);
		const item = todos[update_item_index];
		item.completed = !item.completed;
		setTodos(cloned_todos);
    }

    const values = {
        todos,
        setTodos,
        addTodo,
        toggleTodo
    }

    return <TodoContext.Provider value = {values}>{children}</TodoContext.Provider>
}

export const useTodo = () => {
    const context = useContext(TodoContext);

    if(context === undefined){
        throw new Error('useTodo hook must be call inside TodoProvider component');
    }

    return context;
};