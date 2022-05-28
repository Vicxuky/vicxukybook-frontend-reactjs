import { useState } from "react";
import Layout from "../components/Layout";
import "./Signin.scss";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [content, setContent] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
    console.log(e.target.value);
  };

  const handleContact = (e) => {
    e.preventDefault(); // ngan chan reload page
    alert("conatct");
  };

  return (
    <Layout>
      <div className="bg-signin">
        <form
          action=""
          method=""
          className="container rounded shadow bg-white col-10 col-sm-6 col-lg-6 pb-4"
        >
          <div className="mb-3">
            <h2 className="text-center text-success pt-3">Contact</h2>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <input
                type="email"
                className="form-control shadow-sm"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => handleEmail(e)}
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
                value={fullName}
                onChange={(e) => handleFullName(e)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <textarea
                style={{ height: "200px" }}
                type="text"
                className="form-control shadow-sm"
                name="content"
                placeholder="content.."
                value={content}
                onChange={(e) => handleContent(e)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-signin btn-block shadow mt-3 hover-web"
            onClick={(e) => handleContact(e)}
          >
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
};
export default Contact;
