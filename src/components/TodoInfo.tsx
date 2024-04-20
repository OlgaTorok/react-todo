import { Todo } from '../types/todos';

interface TodoInformation {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

function TodoInfo({ todos, deleteAllCompleted }: TodoInformation) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className='text-center'>
      {completedTodos.length > 0 && (
        <button
          className='text-red font-medium border rounded p-2 my-4 dark:bg-slateLight'
          onClick={deleteAllCompleted}
        >
          Delete all completed
        </button>
      )}
    </div>
  );
}

export default TodoInfo;
