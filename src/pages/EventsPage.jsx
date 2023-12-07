import React from "react";
import { getEvents } from "../Api/events.jsx";
import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ListDisplay } from "../components/List.jsx";

export const EventsPage = () => {
  const [events, setEvents] = useState(null);
  console.log("Render EventsPage");
  useEffect(() => {
    getEvents().then((res) => setEvents(res));
  }, []);

  if (!events) {
    console.log("loading...");
    return <div>loading...</div>;
  }

  return (
    <div className="events_page">
      <Heading>List of events</Heading>
      {events && <ListDisplay events={events} />}
    </div>
  );
};
