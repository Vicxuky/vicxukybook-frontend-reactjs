import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import Signin from "./Signin";
import Contact from "./Contact";
import System from "./System/System";
import Manage from "./System/Manage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/system" element={<System />}></Route>
        <Route path="/system/manage" element={<Manage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
