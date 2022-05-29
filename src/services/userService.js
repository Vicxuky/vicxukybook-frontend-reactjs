import axios from "axios";
import { signinStart, signinSuccess, signinFailed } from "../redux/authSlice";

// const handleLogin = async (inputEmail, inputPassword) => {
//   // dispatch(loginStart());
//   try {
//     await axios.post("http://localhost:8000/api/v1/login", {
//       email: inputEmail,
//       password: inputPassword,
//     });
//     // dispatch(loginSuccess(res.data));

//     // navigate("/system");
//   } catch (e) {
//     // dispatch(loginFailed());
//   }
// };

const handleLogin = (inputEmail, inputPassword) => {
  return axios.post("http://localhost:8000/api/v1/login", {
    email: inputEmail,
    password: inputPassword,
  });
};

const signinUser = async (user, dispatch, navigate) => {
  dispatch(signinStart());
  try {
    await axios.post("http://localhost:8000/post-crud", user);
    dispatch(signinSuccess());
    navigate("/login");
  } catch (error) {
    dispatch(signinFailed());
  }
};

const getAllUserService = (inputId) => {
  // return axios.get(`http://localhost:8000/api/v1/get-all-user?id=${inputId}`);
  return axios.get("http://localhost:8000/api/v1/get-all-user", {
    params: {
      id: inputId,
    },
  });
};

const createNewUserService = (data) => {
  return axios.post("http://localhost:8000/api/v1/create-new-user", data);
};

const editUserService = (inputData) => {
  return axios.put("http://localhost:8000/api/v1/edit-user", inputData);
};

const deleteUserService = (userId) => {
  return axios.delete("http://localhost:8000/api/v1/delete-user", {
    data: {
      id: userId,
    },
  });
};

export {
  handleLogin,
  signinUser,
  getAllUserService,
  createNewUserService,
  deleteUserService,
  editUserService,
};
