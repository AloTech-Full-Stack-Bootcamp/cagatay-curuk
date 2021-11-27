import React from 'react'

function Content({todos , setTodos , filter}) {
    // Delete todo function it takes id as a parameter
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
      }

    // Change todo status function it takes id as a parameter
    const changeStatus = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, status: !todo.status} : todo))
    }
    

    return (
        <div>
        <section class="main">
		<input class="toggle-all" type="checkbox"/>
		<label for="toggle-all">
			Mark all as complete
		</label>
		<ul class="todo-list">
            {/* Filter todos based on filter and map todo to li */}
            {todos.filter((todo) => filter !== undefined ? todo.status === filter : todo).map(todo => (
                <li className={todo.status ? 'completed' : ''}>
                    <div class="view">
                        <input class="toggle" type="checkbox" onClick={() => changeStatus(todo.id)}/>
                        <label>{todo.name}</label>
                        <button class="destroy" onClick={() => deleteTodo(todo.id)}></button>
                    </div>
                </li>
            ))}
		</ul>
	    </section>
        </div>
    )
}

export default Content
