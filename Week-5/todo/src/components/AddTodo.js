import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function AddTodo({setTodos}) {
    const [todo, setTodo] = useState('')

    // Input value assign the local todo state with every change
    const onChangeTodo = (e) => setTodo(e.target.value)

    // When press the enter, push the local todo state to the global todos state
    const onSubmitTodo = (e) => {
        // Disable the default behavior of the form
        e.preventDefault()
        setTodos(prevTodos => [...prevTodos, {id: nanoid(), name: todo , status: false}])
        setTodo('')
    }

    return (
        <div>
        <header class="header">
		<h1>todos</h1>
		<form  onSubmit={onSubmitTodo}>
			<input class="new-todo" placeholder="What needs to be done?" autofocus value={todo} onChange={onChangeTodo}/>
		</form>
	    </header>
        </div>
    )
}

export default AddTodo
