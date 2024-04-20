import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoInfo from './components/TodoInfo';
import useTodos from './hooks/useTodos';
import DarkMode from './components/DarkMode';

function App() {
  const { todos, setTodoCompleted, addTodo, deleteTodo, deleteAllCompleted } =
    useTodos();

  return (
    <main className='bg-white dark:bg-slateDark bg-center w-screen h-screen mx-auto p-10 overflow-y-auto'>
      <div className='max-w-lg mx-auto'>
        <div className='flex flex-row justify-center items-center'>
          <h1 className='font-bold text-3xl text-center text-slateDark dark:text-slateLight p-4'>
            Your Todos
          </h1>
          <DarkMode />
        </div>

        <div className='max-w-lg mx-auto bg-slate-100 rounded-md md:p-6 space-y-6'>
          <AddTodo onSubmit={addTodo} />
          <TodoList
            todos={todos}
            onComplete={setTodoCompleted}
            onDelete={deleteTodo}
          />
        </div>
        <TodoInfo todos={todos} deleteAllCompleted={deleteAllCompleted} />
      </div>
    </main>
  );
}

export default App;
