"use client";

import axios from "axios";
import { useState } from "react";

export default function TodoCard({ todo, getAllPost, setOnUpadate, setUpdateTodo }) {
  const [isChecked, setIsChecked] = useState(todo.is_completed);

  const doCheck = async (todo) => {
    console.log(isChecked);
    const response = await axios.post(
      `http://localhost:8000/api/todos/${todo.id}/check`
    );

    if (response.status === 200) {
      console.log("success");
      setIsChecked(!isChecked);
    }

    if (response.status === 400) {
      console.log("error");
    }
  };

  const doDelete = async (id) => {
    const response = await axios.delete(`http://localhost:8000/api/todos/${id}`);

    if (response.status === 200) {
      console.log("success");
    }

    if (response.status === 400) {
      console.log("error");
    }

    getAllPost();
  }

  const doUpdate = (todo) => {
    setOnUpadate(true);
    setUpdateTodo(todo);
  }

  return (
    <div key={todo.id} className="flex gap-4 items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => doCheck(todo)}
      />
      <p className="text-white">{todo.title}</p>
      <button className="text-white px-3 py-1 bg-yellow-600" onClick={() => doUpdate(todo)}>Upadate</button>
      <button className="text-white px-3 py-1 bg-red-600" onClick={() => doDelete(todo.id)}>Delete</button>
    </div>
  );
}
