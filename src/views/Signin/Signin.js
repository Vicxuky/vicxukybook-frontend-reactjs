import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signinUser } from "../../services/userService";
import Layout from "../../components/Layout";
import "./Signin.scss";
import { useDispatch } from "react-redux";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errMessage, setErrMessage] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    gender: "0",
  });
  //
  const handleInput = (e) => {
    const copyData = { ...data };
    const { name, value } = e.target;
    setData({ ...copyData, [name]: value });
  };

  const [ShowPassword, setShowPassword] = useState(false);
  const handleShowHidePassword = () => {
    setShowPassword(!ShowPassword);
  };

  const checkEmail = (emailInput) => {
    let reg = "<>!#$%^&*()_+[]{}?:;|'\"\\,/~`-=";
    // let reg = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
    if (!emailInput) {
      setErrMessage("Please enter your email");
      return false;
    } else {
      for (let i = 0; i < emailInput.length; i++) {
        if (reg.includes(emailInput[i])) {
          setErrMessage("Email cannot contain special characters");
          return;
        }
      }

      if (emailInput.includes("@") && emailInput.includes(".")) {
        return true;
      } else {
        setErrMessage(
          "Invalid email. Please enter another email. Valid example: abc@gmail.com"
        );
        return false;
      }
    }
  };

  const checkPassword = (passwordInput) => {
    if (!passwordInput) {
      setErrMessage("Please enter your password");
      return false;
    } else if (passwordInput.length >= 4 && passwordInput.length <= 32) {
      return true;
    } else {
      setErrMessage("Password 4 - 32 length");
      return false;
    }
  };

  const checkPhoneNumber = (phoneNumberInput) => {
    // console.log("err Number: ", errMessage);
    if (!phoneNumberInput) {
      setErrMessage("Please enter your phoneNumber");
      return false;
    }
    if (phoneNumberInput.length < 10 || phoneNumberInput.length > 11) {
      setErrMessage("PhoneNumber 10 - 11 length");
      return false;
    } else {
      return true;
    }
  };

  const handleSigninClick = (e) => {
    e.preventDefault();
    setErrMessage("");
    let checkInputEmail = checkEmail(data.email);
    if (checkInputEmail) {
      let checkInputPassword = checkPassword(data.password);
      if (checkInputPassword) {
        let checkInputPhoneNumber = checkPhoneNumber(data.phoneNumber);
        if (checkInputPhoneNumber) {
          signinUser(data, dispatch, navigate);
        }
      }
    }
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
          <span style={{ color: "red" }}>{errMessage}</span>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="email"
                className="form-control shadow-sm"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type={ShowPassword ? "text" : "password"}
                className="form-control shadow-sm pass-input"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => handleInput(e)}
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
                value={data.fullName}
                onChange={(e) => handleInput(e)}
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
                value={data.address}
                onChange={(e) => handleInput(e)}
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
                value={data.phoneNumber}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <select
                defaultValue={"0"}
                onChange={(e) => handleInput(e)}
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
