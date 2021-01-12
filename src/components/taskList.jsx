import React from "react";
import Countdown from "react-countdown";
import { FaPen, FaTrash } from "react-icons/fa";

function TaskList({ tasks, onDelete, date }) {
  ////  ////
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <span className="text-red-600 font-semibold">Deadline Passed</span>
      );
    } else {
      // Render a countdown
      return (
        <span className="font-semibold text-green-600">
          <span className="bg-blue-600 text-white p-1 rounded-lg text-xs md:mr-2 mt-2 ">
            {"Days: "} {days}
          </span>
          <span className="bg-blue-600 text-white p-1 rounded-lg text-xs md:mr-2 mt-2">
            {" Hours: "}
            {hours}
          </span>
          <span className="bg-blue-600 text-white p-1 rounded-lg text-xs md:mr-2 mt-2">
            {" Minutes: "}
            {minutes}
          </span>
          <span className="bg-blue-600 text-white p-1 rounded-lg text-xs">
            {" Seconds: "}
            {seconds}
          </span>
        </span>
      );
    }
  };

  return (
    <div className="container mx-5">
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="border-l-8 border-blue-500 rounded-lg p-3 mt-5 bg-gray-100 w-11/12 md:w-1/2 flex place-items-center"
          >
            <div className="mr-16">
              <h3 className="font-bold text-blue-900 pb-3 uppercase">
                {task.name}
              </h3>

              <h3 className="text-gray-800">{task.description}</h3>
              <h3 className="text-yellow-500">{task.dueDate}</h3>
              <h3 className="text-yellow-900 capitalize font-semibold my-3">{`${task.name} is due in: `}</h3>

              <Countdown date={task.dueDate} renderer={renderer} />
            </div>

            <div className="md:ml-16 md:mt-10 ">
              <button
                onClick={() => onDelete(index)}
                className="md:mr-5 mb-5 text-red-500 hover:text-red-600 focus:outline-none"
              >
                <FaTrash />
              </button>

              <button className=" text-blue-700 hover:text-blue-500 focus:outline-none">
                <FaPen />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
