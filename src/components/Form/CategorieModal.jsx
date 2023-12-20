import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import { createCategory } from "../../Api/categories";
import { FormLabel, Input } from "@chakra-ui/react";
import { showSuccessToast } from "../toastNotifications";

function CategorieModal({ setReload }) {
  const [showModal, setShowModal] = useState(false);
  const [newcategory, setNewCategory] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleOnchange = (e) => {
    e.preventDefault();
    setNewCategory(e.target.value);
  };

  const handleAddButton = (e) => {
    e.preventDefault();
    e.stopPropagation();
    createCategory({ name: newcategory });
    handleClose();
    showSuccessToast(`Category ${newcategory} created`);
    setReload(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Category
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddButton}>
            <FormLabel>New Category</FormLabel>
            <Input
              name="category"
              type="text"
              onChange={handleOnchange}
            ></Input>{" "}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleAddButton}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CategorieModal;
