import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Input from "./components/input";
import loginForm from "./components/login";
import NavBar from "./components/navBar";
import RegisterForm from "./components/register";

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
    console.log(show);
  };
  return (
    <div className="relative min-h-screen">
      <NavBar showMenu={handleShow} status={show} />
      <div>
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={loginForm} />
        </Switch>
      </div>

      {/* <Input /> */}
      <Footer />
    </div>
  );
}

export default App;
