import { useEffect, useState } from "react";

const ModalEditUser = (props) => {
  const [errMessage, setErrMessage] = useState("");

  // s
  const [data, setData] = useState({
    id: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    gender: "",
    roleId: "",
  });

  //
  const handleInput = (e) => {
    const copyData = { ...data };
    const { name, value } = e.target;
    setData({ ...copyData, [name]: value });
  };

  const checkInput = () => {
    let isCheck = true;
    setErrMessage("");
    let arrInput = ["email", "fullName", "address", "phoneNumber"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!data[arrInput[i]]) {
        isCheck = false;
        setErrMessage("Missing parameters " + arrInput[i]);
        break;
      }
    }
    return isCheck;
  };

  const handleSaveEditUser = (e) => {
    e.preventDefault();
    let isValid = checkInput();
    if (isValid === true) {
      //call API >> Manage
      props.editUser(data);
    }
  };

  useEffect(() => {
    let copyUser = { ...props.currentUser };
    setData({ ...copyUser });
  }, [props]);

  return (
    <form>
      <span style={{ color: "red" }}>{errMessage}</span>

      <div className="form-row mt-3"></div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <input
            type="email"
            className="form-control shadow-sm"
            name="email"
            placeholder="Email"
            value={data.email}
            disabled
          />
        </div>

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
            defaultValue={data.gender}
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
            defaultValue={data.roleId}
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
        onClick={(e) => handleSaveEditUser(e)}
      >
        Save
      </button>
    </form>
  );
};
export default ModalEditUser;
