import { useState } from 'react';

interface AddTodoProps {
  onSubmit: (title: string) => void;
}

function AddTodo({ onSubmit }: AddTodoProps) {
  const [input, setInput] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);
    setInput('');
  }

  return (
    <form className='flex' onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        placeholder='Add new task'
        className='flex grow items-center gap-4 py-2 px-4 border-2 border-slateLight rounded-s-md bg-white'
      />
      <button
        type='submit'
        className='min-w-16 rounded-e-md bg-slateDark text-white hover:bg-slate'
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
