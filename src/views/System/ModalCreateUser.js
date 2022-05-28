import { useState } from "react";

const Modal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState(0);
  const [role, setRole] = useState(0);

  const [ShowPassword, setShowPassword] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
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

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleShowHidePassword = () => {
    setShowPassword(!ShowPassword);
  };

  const handleCreateUser = (e) => {
    e.preventDefault(); // ngan chan reload page

    alert(
      " 1." + email + " 2." + fullName + " 3." + address + " 4." + phoneNumber
    );
  };

  return (
    <form>
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
        <div className="form-group col-md-3">
          <select
            defaultValue={gender}
            onChange={(e) => handleGender(e)}
            id="inputState"
            className="form-control"
          >
            <option value="0">Female</option>
            <option value="1">Male</option>
          </select>
        </div>
        <div className="form-group col-md-3">
          <select
            defaultValue={role}
            onChange={(e) => handleRole(e)}
            id="inputState"
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
        className="btn-block hover-web btn-modal"
        onClick={(e) => handleCreateUser(e)}
      >
        Create
      </button>
    </form>
  );
};
export default Modal;
