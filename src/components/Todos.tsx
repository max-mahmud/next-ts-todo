"use client"
import React from "react";
import { useTodos } from "../store/TodoStore";
import { useSearchParams } from "next/navigation";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const searchParams = useSearchParams();
  const data = searchParams.get("todos");

  let filterData = todos;


  // Filter by data (active, completed, or all)
  if (data === "active") {
    filterData = filterData.filter((task) => !task.completed);
  } else if (data === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <div className="mt-4">
      <ul>
        {filterData.map((task, i) => (
          <li
            key={task.id}
            className="flex gap-3 text-slate-500 font-medium mt-2 hover:bg-green-200 items-center border-b"
          >
            <input
              type="checkbox"
              name=""
              id={`todo-${task.id}`}
              checked={task.completed}
              onChange={() => toggleTodoAsCompleted(task.id)}
              className="ms-2"
            />

            <label htmlFor={`todo-${task.id}`} className={`flex-1 py-1 ${task.completed ? "line-through": ""}`}>
              {task.task}
            </label>

            {task.completed && (
              <button
                className="bg-red-500 px-5 py-1 text-white"
                onClick={() => handleDeleteTodo(task.id)}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
