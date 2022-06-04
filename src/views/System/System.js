import { Routes, Route } from "react-router-dom";
// import Manage from "./Manage";

import { useSelector } from "react-redux";
import Login from "../Login/Login";
import LayoutSystem from "./LayoutSystem";
import ManageUsers from "./ManageUsers";
import ManageProducts from "./ManageProducts/ManageProducts";
import ManageOrders from "./ManageOrders";
import ManageBannerAds from "./ManageAds";

const System = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  // const user = 1;
  // checkUser = user && user.token;
  return user && user.user.roleId === "R1" ? (
    <Routes>
      <Route path="/" element={<LayoutSystem />}></Route>
      <Route path="/manage/users" element={<ManageUsers />}></Route>

      <Route path="/manage/products" element={<ManageProducts />}></Route>
      <Route path="/manage/orders" element={<ManageOrders />}></Route>
      <Route path="/manage/ads" element={<ManageBannerAds />}></Route>
      <Route path="/*" element={"Page not found!!"}></Route>
    </Routes>
  ) : (
    <Login />
  );
};
export default System;
