import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const NarbarMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Vicxuky Book
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
          <Nav.Link as={Link} to="/tin-tuc">
            Tin Tức
          </Nav.Link>
          <Nav.Link as={Link} to="/lien-he">
            Liên Hệ
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search..."
            className="mr-2 text-dark"
            aria-label="Search"
          />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Nav>
          <Nav.Link as={Link} to="/dang-ky">
            <u>Đăng ký</u>
          </Nav.Link>
          <Nav.Link as={Link} to="/dang-nhap" eventKey={2}>
            <u>Đăng nhập</u>
          </Nav.Link>
          <Nav.Link as={Link} to="/gio-hang">
            <i class="bi bi-cart"></i>
            Giỏ Hàng
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NarbarMenu;
