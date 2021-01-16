import React, { Component } from "react";
import joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const { error } = joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      const name = item.path[0];
      errors[name] = item.message;
    }
    return errors;
  };

  valideProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.valideProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton = (label) => {
    return (
      <button
        disabled={this.validate()}
        className="md:h-10 h-16 w-11/12 md:w-2/5 px-5 m-2 text-white bg-blue-600 rounded-lg focus:outline-none hover:bg-blue-700 mt-5"
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        focus={true}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
