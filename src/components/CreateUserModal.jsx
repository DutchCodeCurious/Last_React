import React, { useImperativeHandle, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { createUser } from "../Api/users";
import {
  showSuccessToast,
  showErrorToast,
} from "../components/toastNotifications";

function CreateUserModal({ setCreated }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userInfo, setUserInfo] = useState({
    name: "",
    image: "",
  });

  const onChange = (e) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [e.target.name]: e.target.value,
    }));
  };

  // werk aan regels voor deze functie, check of user bestaat, en of de user is made correct
  const onSubmit = (e) => {
    e.preventDefault();
    createUser(userInfo);
    setCreated(true);
    handleClose();
    console.log("submitted");
    showSuccessToast(`User ${userInfo.name} created`);
  };
  console.log(userInfo);

  return (
    <div className="app">
      <Button variant="primary" onClick={handleShow}>
        Create new User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group controlId="formUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                onChange={onChange}
                value={userInfo.name}
                placeholder="Enter user name"
              />
            </Form.Group>

            <Form.Group controlId="formUserImage">
              <Form.Label>User Image</Form.Label>
              <Form.Control
                name="image"
                onChange={onChange}
                value={userInfo.image}
                type="file"
                placeholder="image"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Create User
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateUserModal;
