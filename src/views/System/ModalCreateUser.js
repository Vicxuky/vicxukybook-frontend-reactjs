import { useState } from "react";

const ModalCreateNewUser = (props) => {
  const [errMessage, setErrMessage] = useState("");
  // s
  const [data, setData] = useState({
    email: "",
    password: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    gender: "0",
    roleId: "R3",
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

  const checkInput = () => {
    let isCheck = true;
    setErrMessage("");
    let arrInput = ["email", "password", "fullName", "address", "phoneNumber"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!data[arrInput[i]]) {
        isCheck = false;
        setErrMessage("Missing parameters " + arrInput[i]);
        break;
      }
    }
    return isCheck;
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    let isValid = checkInput();
    if (isValid === true) {
      //call API
      props.createNewUser(data);
    }
  };
  return (
    <form>
      <span style={{ color: "red" }}>{errMessage}</span>
      <div className="form-row mt-3">
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
                ShowPassword ? "bi bi-eye pass-eye" : "bi bi-eye-slash pass-eye"
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
        <div className="form-group col-md-3">
          <select
            defaultValue="0"
            onChange={(e) => handleInput(e)}
            name="gender"
            className="form-control"
          >
            <option value="0">Female</option>
            <option value="1">Male</option>
          </select>
        </div>
        <div className="form-group col-md-3">
          <select
            defaultValue="R3"
            onChange={(e) => handleInput(e)}
            name="roleId"
            className="form-control"
          >
            <option value="R1">Admin</option>
            <option value="R2">Manage</option>
            <option value="R3">User</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="btn-block hover-web btn-modal mt-5"
        onClick={(e) => handleCreateUser(e)}
      >
        Create
      </button>
    </form>
  );
};
export default ModalCreateNewUser;
