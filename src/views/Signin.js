import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "./Signin.scss";

const Signin = () => {
  return (
    <Layout>
      <div className="bg-signin">
        <form
          action="/create-user"
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
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="password"
                className="form-control shadow-sm"
                name="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <input
                type="text"
                className="form-control shadow-sm"
                name="fullName"
                placeholder="Full Name"
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
              />
            </div>
            <div className="form-group col-md-6">
              <select
                defaultValue={"1"}
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
