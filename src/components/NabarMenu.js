import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../services/userService";

const NarbarMenu = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const cart = useSelector((state) => state.cart.value);

  // const accessToken = user?.user.accessToken;
  const id = user?.user.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOutUser(id, dispatch, navigate);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-navbar sticky-top">
        <Navbar.Brand as={Link} to="/">
          VicxukyBook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about">
              Thông Tin
            </Nav.Link>

            <NavDropdown title="Sản Phẩm" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sach-marketing">
                Sách Marketing - Bán hàng
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tam-ly-ky-nang-song">
                Tâm Lý - Kỹ Năng Sống
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tieu-thuyet">
                Tiểu Thuyết
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sach-hoc-tieng-anh">
                Sách Học Tiếng Anh
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/products">
                Tất Cả Sách
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/review">
              Review
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Liên Hệ
            </Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="nhà giả kim.."
                className="mr-2 input-search"
                aria-label="Search"
              />
              <Button variant="outline-light" className="w-25">
                <i className="bi bi-search"></i>
              </Button>
            </Form>
          </Nav>
          <Nav>
            {user ? (
              <>
                <Nav.Link as={Link} to="/">
                  <span>hi:&nbsp;</span>
                  {user.user.email}
                </Nav.Link>
                <Nav.Link as={Link} to="/" onClick={handleLogout}>
                  <u>Log out</u>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/signin">
                  <u>Đăng ký</u>
                </Nav.Link>
                <Nav.Link as={Link} to="/login" eventKey={2}>
                  <u>Đăng nhập</u>
                </Nav.Link>
              </>
            )}

            <Nav.Link as={Link} to="/cart">
              Giỏ Hàng
              <i className="bi bi-cart"></i>
              {cart.length}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NarbarMenu;
