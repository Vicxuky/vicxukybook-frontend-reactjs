import { useEffect, useState } from "react";
import { Navbar, Nav, Button, Modal } from "react-bootstrap";
import { getAllUser } from "../../services/userService";
import ModalForm from "./ModalCreateUser";
import "./UserManage.scss";

const Manage = () => {
  const [listUser, setListUser] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    getAllUser("ALL").then((res) => {
      if (res && res.data.errCode === 0) {
        setListUser(res.data.users);
      }
    });
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Users</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
            <Nav.Link href="#pricing">Orders</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#out">
              Log out<i className="bi bi-box-arrow-right ml-1"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <h2 className="text-center mt-3">Manage User</h2>
      </div>
      <div className="user-table mt-3 mr-1 ml-1">
        <div style={{ height: "600px" }}>
          <button className="btn-create hover-web" onClick={handleShow}>
            Create user <i className="bi bi-person-plus"></i>
          </button>
          {/* modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              {/* <Modal.Header closeButton> */}
              <Modal.Title>
                <h2 className="text-center">Create new user</h2>
              </Modal.Title>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </Modal.Header>
            <Modal.Body>
              <ModalForm />
            </Modal.Body>
            <Modal.Footer>
              <span style={{ color: "red" }}>
                Note: You need Administrator privileges to perform this function
              </span>
              <Button
                className="btn-block"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/* modal */}
          <table id="customers">
            <tbody>
              <tr>
                <th>Email</th>
                <th>FullName</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>

              {listUser.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.email}</td>
                    <td>{item.fullName}</td>
                    <td>{item.address}</td>
                    <td>{item.phoneNumber}</td>
                    <td>
                      <button className="btn-edit">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn-delete">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <footer className="bg-light text-center text-lg-start">
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
export default Manage;
