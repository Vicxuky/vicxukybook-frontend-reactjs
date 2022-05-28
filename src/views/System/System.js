// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Manage from "./Manage";

// import { useSelector } from "react-redux";
import Login from "../Login";
import Manage from "./Manage";

const System = () => {
  // const user = useSelector((state) => state.auth.login.currentUser);
  const user = 1;
  // checkUser = user && user.token
  return user === 1 ? <Manage /> : <Login />;
};
export default System;
