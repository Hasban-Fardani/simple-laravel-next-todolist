'use client'

import axios from "axios";
import TodoCard from "./components/TodoCard";
import FormTodo from "./components/FormTodo";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState(null);
  const [onUpadate, setOnUpadate] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(null);

  const getAllPost = async () => {
    const todos = await axios.get('http://localhost:8000/api/todos')
    setTodos(todos)
  }

  useEffect(() => {
    getAllPost()
  }, [])

  if (!todos) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Todos</h1>
      <FormTodo getAllPost={getAllPost} onUpdate={onUpadate} setOnUpadate={setOnUpadate} updateTodo={updateTodo} setUpdateTodo={setUpdateTodo}/>
      {todos.data.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} getAllPost={getAllPost} setOnUpadate={setOnUpadate} setUpdateTodo={setUpdateTodo} />
      ))}
    </div>
  );
}
