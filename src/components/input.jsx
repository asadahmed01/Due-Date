import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import TaskList from "./taskList";
import uuid from "react-uuid";

function Input() {
  ////////          ///////////
  const [task, setTask] = useState({
    name: "",
    description: "",
    dueDate: "",
    id: "",
  });

  const [items, setItems] = useState([]);
  const [hide, setHide] = useState(true);

  const handleName = (e) => {
    const name = e.currentTarget.value;
    setTask((prevState) => {
      return { ...prevState, name };
    });
  };

  const handleDescriptioin = (e) => {
    const description = e.target.value;
    setTask((prevState) => {
      return { ...prevState, description };
    });
  };

  const handleDate = (e) => {
    const date = e.target.value;
    setTask((prevState) => {
      return { ...prevState, dueDate: date, id: uuid() };
    });
  };

  const handleDelete = (id) => {
    const arr = [...items];
    const filtered = arr.filter((item) => item.id !== id);
    setItems(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems((items) => [task, ...items]);
    setTask({ name: "", description: "", dueDate: "" });
  };

  const showInput = () => {
    setHide(!hide);
    return hide;
  };

  return (
    <div className="text-center mt-5">
      <button
        className="md:text-5xl text-8xl text-gray-500 md:border border-blue-500 rounded-full p-1 m-5 hover:bg-gray-200 hover:text-gray-600 focus:outline-none hover:animate-bounce"
        onClick={showInput}
      >
        {hide ? <FaArrowDown className="animate-bounce" /> : <FaArrowUp />}
      </button>
      <div className={hide ? "hidden" : ""}>
        <form
          onSubmit={handleSubmit}
          className="md:flex md:justify-between mx-5 mt-5 text-left"
        >
          <label className="text-gray-400 text-xl font-semibold md:hidden">
            Task Name:
          </label>
          <input
            className="input border border-blue-500 focus:border-indigo-600 focus:outline-none text-black tracking-widest font-bold px-3 md:py-1 py-5 rounded-lg w-full md:mr-5 md:mt-5 mb-5"
            type="text"
            placeholder="task name"
            onChange={handleName}
            value={task.name}
            name="taskname"
          />
          <label className="text-gray-400 text-xl font-semibold md:hidden">
            Description:
          </label>
          <input
            className="input border border-blue-500 focus:border-indigo-600 focus:outline-none text-black tracking-widest font-bold px-3 md:py-1 py-5 rounded-lg w-full md:mr-5 md:mt-5 mb-3 mt-1"
            type="text"
            placeholder="task description"
            onChange={handleDescriptioin}
            value={task.description}
          />
          <label className="text-gray-400 text-xl font-semibold md:hidden">
            Choose Date:
          </label>
          <input
            className="input border border-blue-500 focus:border-indigo-600 focus:outline-none text-black tracking-widest font-bold px-3 md:py-2 py-5 rounded-lg w-full md:mr-5 mt-1"
            type="datetime-local"
            placeholder="Due date"
            onChange={handleDate}
            value={task.dueDate}
          />

          <button
            className="md:h-10 h-16 w-11/12 md:w-2/5 px-5 m-2 text-white bg-blue-600 rounded-lg focus:outline-none hover:bg-blue-700 mt-5"
            disabled={!task.name || !task.dueDate}
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        {items.length > 0 ? (
          <TaskList tasks={items} onDelete={handleDelete} date={task.dueDate} />
        ) : (
          <sp className="font-semibold text-lg text-gray-300 text-left">
            No Tasks to display
          </sp>
        )}
      </div>
    </div>
  );
}

export default Input;
