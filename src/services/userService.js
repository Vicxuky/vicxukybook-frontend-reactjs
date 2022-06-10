import axios from "axios";
import {
  signinStart,
  signinSuccess,
  signinFailed,
  logOutStart,
  logOutFailed,
  logOutSuccess,
} from "../redux/authSlice";

// const loginUser = async (user, dispath, navigate) => {
//   // dispatch(loginStart());
//   try {
//     let res = await axios.post("http://localhost:8000/api/v1/login",user);
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

const logOutUser = async (id, dispath, navigate) => {
  // const logOutUser = async (id, accessToken, dispath, navigate) => {
  dispath(logOutStart());
  try {
    await axios.post("http://localhost:8000/api/v1/logout", id);
    //  {

    //   // headers: { token: `Bearer ${accessToken}` },
    // });
    dispath(logOutSuccess());
    navigate("/");
  } catch (e) {
    dispath(logOutFailed());
  }
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
  return axios.get(
    "http://localhost:8000/api/v1/get-all-user",
    {
      params: {
        id: inputId,
      },
    }
    // {
    //   headers: { token: `Bearer ${accessToken}` },
    // }
  );
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
  logOutUser,
  signinUser,
  getAllUserService,
  createNewUserService,
  deleteUserService,
  editUserService,
};
