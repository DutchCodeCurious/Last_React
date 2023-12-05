import React, { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getEvent } from "../Api/events";
import { useState } from "react";
import { getUser } from "../Api/users";

export const EventPage = () => {
  const [event, setEvent] = useState(null);
  const [user, setUser] = useState(null);
  const { id } = useParams();

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
        <p>{user.name}</p>
        <img src={user.image} alt={user.name} />
      </div>
    </>
  );
};
