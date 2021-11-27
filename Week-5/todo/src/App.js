import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import { useState } from 'react';

function App() {
  // create state for todos
  const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState(undefined);

  return (
    <div className="App">
      <section class="todoapp">
        {/* Components */}
        <AddTodo setTodos={setTodos} /> 
        <Content todos={todos} setTodos={setTodos} filter={filter}/>
        <Footer todos={todos} filter={filter} setTodos={setTodos} setFilter={setFilter}/>
    </section>

<footer class="info">
	<p>Click to edit a todo</p>
	<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
    </div>
  );
}

export default App;
