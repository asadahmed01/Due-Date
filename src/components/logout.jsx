import React, { Component } from "react";
import { logout } from "./services/authServices";

class Logout extends Component {
  componentDidMount() {
    logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
