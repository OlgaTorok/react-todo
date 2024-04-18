import { Trash2 } from 'lucide-react';
import { Todo } from '../types/todos';

interface TodoItemProps {
  todo: Todo;
  onComplete: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

function TodoItem({ todo, onComplete, onDelete }: TodoItemProps) {
  return (
    <div className='flex items-center gap-1'>
      <label className='flex grow items-center gap-4 py-2 px-4 border-2 border-slateLight rounded-md bg-white hover:bg-slateLight'>
        <input
          type='checkbox'
          className='scale-150'
          checked={todo.completed}
          onChange={(e) => onComplete(todo.id, e.target.checked)}
        />
        <span className={todo.completed ? 'line-through text-slate' : ''}>
          {todo.title}
        </span>
      </label>
      <button className='p-2' onClick={() => onDelete(todo.id)}>
        <Trash2 size={20} className='text-slate' />
      </button>
    </div>
  );
}

export default TodoItem;
