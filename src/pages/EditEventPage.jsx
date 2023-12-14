import React from "react";
import { Form } from "../components/Form/Form";
import { getEvent } from "../Api/events";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateEvent } from "../Api/events";
import {
  showErrorToast,
  showSuccessToast,
} from "../components/toastNotifications";

export const EditEventPage = () => {
  const [event, setEvent] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("Render EditEventPage " + id);

  useEffect(() => {
    getEvent(id).then((res) => setEvent(res));
  }, [id]);

  const onSubmit = async (e) => {
    const result = await updateEvent(e);
    console.log(result);
    if (result.success) {
      showSuccessToast(`Event: ${e.title} is edited`);
      navigate("/event/" + result.data);
    } else {
      showErrorToast(`Failed to edit ${e.title}`);
    }
  };

  console.log(id);
  return (
    <div>
      <h1>Edit Event Page</h1>
      {event && <Form event={event} onSubmit={onSubmit} />}
    </div>
  );
};
