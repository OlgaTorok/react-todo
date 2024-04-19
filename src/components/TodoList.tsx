import { Todo } from '../types/todos';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onComplete: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

function TodoList({ todos, onComplete, onDelete }: TodoListProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  const sortedTodos = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className='text-center my-4'>
        <p>
          {completedTodos.length}/{todos.length} task completed.
        </p>
      </div>
      <div className='space-y-2'>
        {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className='text-center text-sm text-slate'>
          No tasks yet, add a new task.
        </p>
      )}
    </>
  );
}

export default TodoList;
