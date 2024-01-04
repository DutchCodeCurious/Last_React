import React from "react";

import { createEvent } from "../Api/events";
import {
  showSuccessToast,
  showErrorToast,
} from "../components/toastNotifications";
import { useNavigate } from "react-router-dom";
import { EventForm } from "../components/Form/EventForm";

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
      <EventForm />
    </div>
  );
};

{
  /*onSubmit={onSubmit}*/
}
