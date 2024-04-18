import { useState } from 'react';
import './App.css';
import { mockData } from './data/todos';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoInfo from './components/TodoInfo';

function App() {
  const [todos, setTodos] = useState(mockData);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodo(title: string) {
    // If we have  a database this will not be needed
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteAllCompleted() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }

  return (
    <main className='bg-white bg-center h-screen p-10 overflow-y-auto'>
      <h1 className='font-bold text-3xl text-center text-slate-900 p-4'>
        Your Todos
      </h1>
      <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-6 space-y-6'>
        <AddTodo onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onComplete={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoInfo
        todos={todos}
        deleteAllCompleted={deleteAllCompleted}
      />
    </main>
  );
}

export default App;
