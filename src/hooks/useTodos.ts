import { useEffect, useState } from 'react';
import { Todo } from '../types/todos';
import { mockData } from '../data/todos';

function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(
      localStorage.getItem('todos') || '[]'
    );
    return savedTodos.length > 0 ? savedTodos : mockData;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodo(title: string) {
    // If we have  a database this will not be needed
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteAllCompleted() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }

  return {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompleted
  }
}

export default useTodos
