import { Todo } from '../types/todos';

interface TodoInformation {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

function TodoInfo({ todos, deleteAllCompleted }: TodoInformation) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className='text-center my-4'>
      <p>
        {completedTodos.length}/{todos.length} todos completed.
      </p>
      {completedTodos.length > 0 && (
        <button
          className='text-red-500 text-sn font-medium'
          onClick={deleteAllCompleted}
        >
          Delete all completed
        </button>
      )}
    </div>
  );
}

export default TodoInfo;
