import axios from "axios";

const instance = axios.create({
  baseURL: "https://nodejs-vicxuky-book.herokuapp.com",
  withCredentials: false,
});
export default instance;
