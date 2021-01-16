import React from "react";
import joi from "joi-browser";
import Form from "./common/form";
import * as authServices from "./services/authServices";
//import { Redirect } from "react-router-dom";

class loginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };
  schema = {
    email: joi.string().required().email().label("email"),
    password: joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      await authServices.login(this.state.data.email, this.state.data.password);
      //
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status == 400) {
        let errors = { ...this.state.errors };
        // errors.email = ex.response.data;
        // errors.password = ex.response.data;
        errors = ex.response.data;
        this.setState({ errors });
      }
      console.log("nooo");
    }
  };

  render() {
    //if (authServices.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <h1>Log in Here</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.state.errors && (
            <div className="text-red-500 ml-5">{this.state.errors.msg}</div>
          )}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default loginForm;
