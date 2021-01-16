import React from "react";

const Input = ({ name, label, error, focus, ...rest }) => {
  return (
    <div className="md:flex md:justify-between mx-5 mt-5 text-left">
      <label htmlFor={name} className="text-gray-400 text-xl font-semibold ">
        {label}
      </label>

      <input
        {...rest}
        name={name}
        autoFocus={focus}
        className="input border border-blue-500 focus:border-indigo-600 focus:outline-none text-black tracking-widest font-bold px-3 md:py-1 py-5 rounded-lg w-full md:mr-5 md:mt-0 mb-5"
        id={name}
        aria-describedby="emailHelp"
      />
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default Input;
