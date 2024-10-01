import axios from "axios";
import { useState } from "react";


export default function FormTodo({ getAllPost, onUpdate, setOnUpadate, updateTodo, setUpdateTodo }) {
  const [title, setTitle] = useState("");
  const createTodo = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");

    axios
      .post("http://localhost:8000/api/todos", {
        title
      })
      .then((res) => {
        if (res.status === 201) {
          getAllPost();
        }
      });
  }

  const doUpdateTodo = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const titleToUpdate = formData.get("title");

    if (!updateTodo.id) {
      return;
    }

    axios
      .put(`http://localhost:8000/api/todos/${updateTodo.id}`, {
        title: titleToUpdate
      })
      .then((res) => {
        if (res.status === 200) {
          getAllPost();
        }
      });
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold">{onUpdate ? "Update Todo" : "Create Todo"}</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          if (onUpdate) {
            doUpdateTodo(e)
            setOnUpadate(false)
            setUpdateTodo(null)
          } else {
            createTodo(e)
          }
        }}
      >
        <input
          className="border border-gray-300 rounded-md p-2 px-4 text-black"
          type="text"
          name="title"
          placeholder="Title"
          value={onUpdate ? updateTodo?.title : title}
          onChange={(e) => {
            if (onUpdate) {
              setUpdateTodo({
                ...updateTodo,
                title: e.target.value
              })
            } else {
              setTitle(e.target.value)
            }
          }}
        />

        {onUpdate ? (
          <button
            className="bg-yellow-500 text-white rounded-md p-2"
            type="submit"
          >
            Update
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white rounded-md p-2"
            type="submit"
          >
            Create
          </button>
        )}
      </form>
    </div>
  );
}