import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/LogIn";
import Signin from "./pages/SignUp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "./App.css";
import SignIn from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />} />

        <Route path="/Signup" element={<Signin />} />

        <Route path="/About" element={<About />} />

        <Route path="/Contact" element={<Contact />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
