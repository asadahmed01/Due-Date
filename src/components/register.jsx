import React from "react";
import joi from "joi-browser";
import Form from "./common/form";
import * as userServices from "./services/userService";
class RegisterForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: joi.string().required().email().label("email"),
    password: joi.string().required().min(5).label("Password"),
  };

  doSubmit = async () => {
    try {
      const response = await userServices.register(this.state.data);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status == 400) {
        let errors = { ...this.state.errors };
        errors = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register Here</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.state.errors && (
            <div className="text-red-500 ml-5">{this.state.errors.msg}</div>
          )}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
