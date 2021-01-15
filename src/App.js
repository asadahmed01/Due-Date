import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Input from "./components/input";
import NavBar from "./components/navBar";

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
    console.log(show);
  };
  return (
    <div className="relative min-h-screen">
      <NavBar showMenu={handleShow} status={show} />
      <Input />
      <Footer />
    </div>
  );
}

export default App;
