import { Todo } from '../types/todos';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onComplete: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

function TodoList({ todos, onComplete, onDelete }: TodoListProps) {
  const sortedTodos = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
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
          No todos yet. Add a new todo.
        </p>
      )}
    </>
  );
}

export default TodoList;
