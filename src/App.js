import { useState } from "react";
import "./App.css";
import Input from "./components/input";
import NavBar from "./components/navBar";

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
    console.log(show);
  };
  return (
    <div>
      <NavBar showMenu={handleShow} status={show} />
      <Input />
    </div>
  );
}

export default App;
