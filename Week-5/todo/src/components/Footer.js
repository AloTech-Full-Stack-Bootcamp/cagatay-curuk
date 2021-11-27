import React from 'react'

function Footer({todos , setTodos, filter, setFilter}) {
    // Clear completed todos function
    const clearCompleted = () => {
        setTodos(todos.filter((todo) => todo.status !== true));
    }

    return (
        <div>
        <footer class="footer">

        <span class="todo-count">
            {/* Count active todos */}
            <strong>{todos.filter(todo => todo.status === false).length}</strong>
            items left
        </span>

        {/* Filter section for todo status */}
        <ul class="filters">
            <li>
                <a class="selected" onClick={() => setFilter(undefined)} className={filter === undefined ? "btn btn-sm selected" : "btn btn-sm"}>All</a>
            </li>
            <li>
                <a onClick={() => setFilter(false)} className={filter === false ? "btn btn-sm selected" : "btn btn-sm"}>Active</a>
            </li>
            <li>
                <a onClick={() => setFilter(true)} className={filter === true ? "btn btn-sm selected" : "btn btn-sm"}>Completed</a>
            </li>
        </ul>
        
        {/* // Clear completed todos press the button with clearCompleted function call */}
        <button class="clear-completed" onClick={() => clearCompleted()}>
            Clear completed
        </button>
        </footer>
        </div>
    )
}

export default Footer;
