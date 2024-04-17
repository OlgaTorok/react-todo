import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import { mockData } from './data/todos';

function App() {
  const [todos, setTodos] = useState(mockData);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  return (
    <main className='bg-white bg-center h-screen p-10'>
      <h1 className='font-bold text-3xl text-center p-4'>Your Todos</h1>
      <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-6'>
        <div className='space-y-2'>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onComplete={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
