import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "./Login.scss";

const Login = () => {
  return (
    <Layout>
      <div className="bg-login">
        <form className="container rounded shadow bg-white col-10 col-sm-6 col-lg-3">
          <div className="mb-5">
            <h2 className="text-center text-success pt-3">Login</h2>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12 d-flex">
              <input
                type="email"
                className="form-control shadow-sm"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-12">
              <input
                type="password"
                className="form-control shadow-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-login btn-block shadow mb-3">
            Log in
          </button>
          <div className="text-center text-dark">
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
