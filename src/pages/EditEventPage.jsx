import React from "react";
import { Form } from "../components/Form/Form";
import { getEvent } from "../Api/events";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const EditEventPage = () => {
  const [event, setEvent] = useState();
  const { id } = useParams();
  console.log("Render EditEventPage " + id);

  useEffect(() => {
    getEvent(id).then((res) => setEvent(res));
  }, [id]);

  console.log(event);
  return (
    <div>
      <h1>Edit Event Page</h1>
      <Form event={event} />
    </div>
  );
};
