import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NarbarMenu = () => {
  const user = useSelector((state) => state.auth.login.currentUser);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-navbar sticky-top"
        // bg="light"
        // variant="light"
      >
        <Navbar.Brand as={Link} to="/">
          VicxukyBook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/thong-tin">
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
              <NavDropdown.Item as={Link} to="/san-pham">
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
                  {user.user.email}
                </Nav.Link>
                <Nav.Link as={Link} to="/logout">
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

            <Nav.Link as={Link} to="/gio-hang">
              Giỏ Hàng
              <i className="bi bi-cart"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NarbarMenu;
