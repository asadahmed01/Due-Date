import React, { useState } from "react";
import TaskList from "./taskList";

function Input(props) {
  ////////          ///////////
  const [task, setTask] = useState({
    name: "",
    description: "",
    dueDate: "",
    time: {},
  });

  const [items, setItems] = useState([]);
  //const [time, setTime] = useState([]);

  //const interval = setInterval(() => setTime(calculateTimeLeft()), 1000);

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
      return { ...prevState, dueDate: date };
    });
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name === "" || task.dueDate === "") return;
    console.log(items);

    setItems((old) => [task, ...old]);

    setTask({ name: "", description: "", dueDate: "" });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="md:flex md:justify-between mx-5 mt-5"
      >
        <input
          className="input border border-blue-500 focus:border-indigo-600 focus:outline-none text-black tracking-widest font-bold px-3 py-1 w-full mr-5 mt-5"
          type="text"
          placeholder="task name"
          onChange={handleName}
          value={task.name}
          name="taskname"
        />

        <input
          className="input border border-blue-500 focus:border-indigo-600 focus:outline-none text-black tracking-widest font-bold px-3 py-1 w-full mr-5 mt-5"
          type="text"
          placeholder="task description"
          onChange={handleDescriptioin}
          value={task.description}
        />

        <input
          className="input border border-blue-500 focus:border-indigo-600 focus:outline-none text-black tracking-widest font-bold px-1 py-1 w-full mt-5"
          type="datetime-local"
          placeholder="Due date"
          onChange={handleDate}
          value={task.dueDate}
        />

        <button className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-green-600 rounded-lg focus:outline-none hover:bg-blue-700 mt-5">
          Submit
        </button>
      </form>
      <TaskList tasks={items} onDelete={handleDelete} date={task.dueDate} />
    </div>
  );
}

export default Input;
