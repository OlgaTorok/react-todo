import { Todo } from '../types/todos';

interface TodoItemProps {
  todo: Todo;
  onComplete: (id: number, completed: boolean) => void;
}

function TodoItem({ todo, onComplete }: TodoItemProps) {
  return (
    <div>
      <label className='flex items-center gap-4 py-2 px-4 border-2 border-slate-300 rounded-md bg-white hover:bg-slate-100'>
        <input
          type='checkbox'
          className='scale-150'
          checked={todo.completed}
          onChange={(e) => onComplete(todo.id, e.target.checked)}
        />
        <span className={todo.completed ? 'line-through text-gray-400' : ''}>
          {todo.title}
        </span>
      </label>
    </div>
  );
}

export default TodoItem;
