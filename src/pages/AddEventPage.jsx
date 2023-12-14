import React from "react";
import { Form } from "../components/Form/Form";
import { createEvent } from "../Api/events";
import {
  showSuccessToast,
  showErrorToast,
} from "../components/toastNotifications";
import { useNavigate } from "react-router-dom";

export const AddEventPage = () => {
  console.log("Render AddEventPage");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    const result = await createEvent(e);
    if (result.success) {
      showSuccessToast(`Event: ${e.title} is created`);
      navigate("/event/" + result.data);
    } else {
      showErrorToast(`Failed to create ${e.title}`);
    }
  };

  return (
    <div>
      <h1>Add Event Page</h1>
      <Form onSubmit={onSubmit} />
    </div>
  );
};
