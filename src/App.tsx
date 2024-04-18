import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoInfo from './components/TodoInfo';
import useTodos from './hooks/useTodos';

function App() {
  const { todos, setTodoCompleted, addTodo, deleteTodo, deleteAllCompleted } =
    useTodos();

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
      <TodoInfo todos={todos} deleteAllCompleted={deleteAllCompleted} />
    </main>
  );
}

export default App;
