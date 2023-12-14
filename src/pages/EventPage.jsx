import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { getEvent, deleteEvent } from "../Api/events";
import { getUser } from "../Api/users";
import { UserCard } from "../components/UserCard";
import { Button } from "@chakra-ui/react";
import {
  showSuccessToast,
  showErrorToast,
} from "../components/toastNotifications";

export const EventPage = () => {
  const [event, setEvent] = useState(null);
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const result = await deleteEvent(id);
    console.log(result.status);

    if (result.success) {
      showSuccessToast(`Event ${event.title} deleted`);
      navigate("/");
    } else {
      showErrorToast(`Failed to delete ${event.title}`);
    }
  };
  console.log("Render EventPage " + id);

  useEffect(() => {
    getEvent(id).then((res) => setEvent(res));
  }, [id]);

  useEffect(() => {
    if (event) {
      getUser(event.createdBy).then((res) => setUser(res));
    }
  }, [event]);

  if (!event || !user) {
    console.log("loading...");
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="event_detail">
        <Heading>{event.title}</Heading>
        <img src={event.image} alt={event.title} />
        <p className="event_description">{event.description}</p>
        <p className="event_location">{event.location}</p>
      </div>
      <div className="event_user">
        <UserCard user={user} />
      </div>
      <div className="event_buttons">
        <Button
          className="event_button"
          as={Link}
          to={`/event/` + event.id.toString() + `/edit`}
        >
          Edit
        </Button>
        <Button className="event_button" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </div>
    </>
  );
};
