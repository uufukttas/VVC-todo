import React, { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (
        <div>
            <List todos={todos} />
            <Form todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default Todos