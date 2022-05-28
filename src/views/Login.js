import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import "./Login.scss";

import { handleLogin } from "../services/userService";

import { loginStart, loginSuccess, loginFailed } from "../redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  var history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleShowHidePassword = () => {
    setShowPassword(!ShowPassword);
  };

  const handleLoginClick = async (e) => {
    e.preventDefault(); // ngan chan reload page
    setErrMessage("");
    dispatch(loginStart());
    try {
      let res = await handleLogin(email, password);
      if (res.data.errCode === 0) {
        dispatch(loginSuccess(res.data));
        if (res.data.user.roleId === "R1") {
          //loginSystem
          history("/system");
        } else {
          history("/");
        }
      } else {
        setErrMessage(res.data.message);
      }
    } catch (err) {
      dispatch(loginFailed());

      if (err.response) {
        if (err.response.data) {
          setErrMessage(err.response.data.message);
        }
      }
    }
  };

  return (
    <Layout>
      <div className="bg-login">
        <form className="container rounded shadow bg-white col-10 col-sm-6 col-lg-3">
          <div className="mb-5">
            <h2 className="text-center text-success pt-3">Login</h2>
          </div>
          <div className="form-row">
            <div
              className="col-md-12 mb-3"
              style={{ color: "red", fontStyle: "italic" }}
            >
              {errMessage}
            </div>
            <div className="form-group col-md-12 d-flex">
              <input
                type="email"
                className="form-control shadow-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => handleEmail(e)}
              />
            </div>
            <div className="form-group col-md-12">
              <input
                type={ShowPassword ? "text" : "password"}
                className="form-control shadow-sm pass-input"
                placeholder="Password"
                value={password}
                onChange={(e) => handlePassword(e)}
              />
              <span onClick={() => handleShowHidePassword()}>
                <i
                  className={
                    ShowPassword
                      ? "bi bi-eye pass-eye"
                      : "bi bi-eye-slash pass-eye"
                  }
                ></i>
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-login btn-block shadow mb-2 hover-web"
            onClick={(e) => handleLoginClick(e)}
          >
            Log in
          </button>
          <span className="sp-login">
            <Link to="/login">Forgot your password?</Link>
          </span>
          <div className="text-center text-dark mt-3">
            <Link to="/signin">Sign up</Link>
          </div>
          <hr />
          <div className="form-row">
            <button
              type="submit"
              className="btn btn-primary btn-block shadow-sm mb-3 mt-1"
            >
              Login with Facebook
            </button>
            <button
              type="submit"
              className="btn btn-danger btn-block shadow-sm mb-5"
            >
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
