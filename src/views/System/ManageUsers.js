import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  getAllUserService,
  createNewUserService,
  deleteUserService,
  editUserService,
} from "../../services/userService";
import LayoutSystem from "./LayoutSystem";
import ModalFormCreateUser from "./ModalCreateUser";
import ModalFormEditUser from "./ModalEditUser";
import "./UserManage.scss";

const Manage = () => {
  const [listUser, setListUser] = useState([]);
  const [propUser, setPropUser] = useState([]);

  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseEdit = () => setShowEdit(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleShowEdit = (user) => {
    setPropUser(user);
    setShowEdit(true);
  };

  const createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);
      if (response && response.data.errCode !== 0) {
        alert(response.data.errMessage);
      } else {
        alert(response.data.errMessage);
        handleClose();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditUser = async (user) => {
    try {
      let res = await editUserService(user);
      if (res && res.data.errCode !== 0) {
        alert(res.data.errMessage);
      } else {
        alert(res.data.errMessage);
        handleCloseEdit();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getAllUser = async () => {
    let res = await getAllUserService("ALL");
    if (res && res.data.errCode === 0) {
      setListUser(res.data.users);
    }
  };

  useEffect(() => {
    getAllUser();
  }, [show, showEdit]);

  const handleDeleteUser = async (user) => {
    try {
      // let result = confirm("Delete user");
      // if (result) {
      let res = await deleteUserService(user.id);
      if (res && res.data.errCode === 0) {
        getAllUser();
      } else {
        alert(res.data.errMessage);
      }
      // }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LayoutSystem>
      <div>
        <h2 className="text-center mt-3">Manage User</h2>
      </div>
      <div className="user-table mt-3 mr-1 ml-1">
        <div style={{ height: "600px" }}>
          <button className="btn-create hover-web" onClick={handleShow}>
            Create user <i className="bi bi-person-plus"></i>
          </button>
          {/* modal */}
          <Modal show={show} onHide={handleClose} size="lg">
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
              <ModalFormCreateUser createNewUser={createNewUser} />
            </Modal.Body>
            <Modal.Footer>
              <span
                className="text-center"
                style={{ color: "red", width: "100%" }}
              >
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

          {/* modal edit user */}
          <Modal show={showEdit} onHide={handleCloseEdit} size="lg">
            <Modal.Header>
              {/* <Modal.Header closeButton> */}
              <Modal.Title>
                <h2 className="text-center">Edit user</h2>
              </Modal.Title>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseEdit}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </Modal.Header>
            <Modal.Body>
              <ModalFormEditUser
                currentUser={propUser}
                editUser={handleEditUser}
              />
            </Modal.Body>
            <Modal.Footer>
              <span
                className="text-center"
                style={{ color: "red", width: "100%" }}
              >
                Note: You need Administrator privileges to perform this function
              </span>
              <Button
                className="btn-block"
                variant="secondary"
                onClick={handleCloseEdit}
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

              {listUser.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.email}</td>
                    <td>{item.fullName}</td>
                    <td>{item.address}</td>
                    <td>{item.phoneNumber}</td>
                    <td>
                      <button
                        className="btn-edit "
                        onClick={() => handleShowEdit(item)}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>

                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteUser(item)}
                      >
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
    </LayoutSystem>
  );
};
export default Manage;
