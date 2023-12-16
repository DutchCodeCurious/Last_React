import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import { getCategories, createCategory } from "../../Api/categories";
import { ButtonSpinner, FormLabel, Input } from "@chakra-ui/react";
import { showErrorToast, showSuccessToast } from "../toastNotifications";
import { set } from "react-hook-form";

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
    createCategory({ name: newcategory });
    handleClose();
    showSuccessToast(`Category ${newcategory} created`);
    setReload(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormLabel>New Category</FormLabel>
            <Input
              name="category"
              type="text"
              onChange={handleOnchange}
            ></Input>{" "}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAddButton}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CategorieModal;
