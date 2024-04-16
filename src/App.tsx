import './App.css';
import { mockData } from './data/todos';

function App() {
  return (
    <main className='p-10 bg-forest bg-center h-screen'>
      <h1 className='font-bold text-3xl text-center p-4'>Your Todos</h1>
      <div className='max-w-lg mx-auto'>
        <div className='space-y-4'>
          {mockData.map((todo) => (
            <p key={todo.id} className='text-lg'>
              {todo.title}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
