import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signinUser } from "../services/userService";
import Layout from "../components/Layout";
import "./Signin.scss";
import { useDispatch } from "react-redux";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState(0);

  const [ShowPassword, setShowPassword] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleShowHidePassword = () => {
    setShowPassword(!ShowPassword);
  };

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleSigninClick = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      fullName: fullName,
      address: address,
      phoneNumber: phoneNumber,
      gender: gender,
    };
    signinUser(newUser, dispatch, navigate);
  };

  return (
    <Layout>
      <div className="bg-signin">
        <form
          action=""
          method="POST"
          className="container rounded shadow bg-white col-10 col-sm-6 col-lg-6"
        >
          <div className="mb-5">
            <h2 className="text-center text-success pt-3">Sign in</h2>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="email"
                className="form-control shadow-sm"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => handleEmail(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type={ShowPassword ? "text" : "password"}
                className="form-control shadow-sm pass-input"
                name="password"
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
          <div className="form-row">
            <div className="form-group col-md-12">
              <input
                type="text"
                className="form-control shadow-sm"
                name="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => handleFullName(e)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <input
                type="text"
                className="form-control shadow-sm"
                name="address"
                placeholder="Address.."
                value={address}
                onChange={(e) => handleAddress(e)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control shadow-sm"
                name="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => handlePhoneNumber(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <select
                defaultValue={"1"}
                onChange={(e) => handleGender(e)}
                id="inputState"
                className="form-control"
              >
                <option value="0">Female</option>
                <option value="1">Male</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-signin btn-block shadow mb-3"
            onClick={(e) => handleSigninClick(e)}
          >
            Sign in
          </button>
          <div className="text-center link-login">
            <Link to="/login">Log in</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};
export default Signin;
