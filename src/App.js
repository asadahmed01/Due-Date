import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/common/protectedRoute";
import Footer from "./components/footer";
import Home from "./components/Home";
import Input from "./components/input";
import loginForm from "./components/login";
import Logout from "./components/logout";
import NavBar from "./components/navBar";
import RegisterForm from "./components/register";
import { getCurrentUser } from "./components/services/authServices";

function App() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const user = getCurrentUser();
    setUser(user);
  }, []);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="relative min-h-screen">
      <NavBar showMenu={handleShow} status={show} user={user} />
      <div>
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={loginForm} />
          <Route path="/logout" component={Logout} />
          <ProtectedRoute path="/tasks" component={Input} />

          <Route path="/" exact component={Home} />
        </Switch>
      </div>

      {/* <Input /> */}
      <Footer />
    </div>
  );
}

export default App;
