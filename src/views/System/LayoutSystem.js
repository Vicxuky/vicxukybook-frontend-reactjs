import { Navbar, Nav } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../services/userService";

const LayoutSystem = ({ children }) => {
  const user = useSelector((state) => state.auth.login.currentUser);

  // const accessToken = user?.user.accessToken;
  const id = user?.user.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOutUser(id, dispatch, navigate);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/system">System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/system/manage/users">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/system/manage/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/system/manage/orders">
              Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/system/manage/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/system/manage/ads">
              Banner - Ads
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              hi:&nbsp;
              {user?.user.email}
            </Nav.Link>
            <Nav.Link onClick={handleLogout}>
              Log out<i className="bi bi-box-arrow-right ml-1"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main>{children}</main>
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center" style={{ color: "red" }}>
          Welcome To Admin System VicxukyBook
        </div>

        <div className="text-center p-3">
          © 2022 Copyright:
          <a className="text-dark pl-1" href="/">
            vicxuky@admin.com
          </a>
        </div>
      </footer>
    </>
  );
};
export default LayoutSystem;
