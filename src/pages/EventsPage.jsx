import React from "react";
import { getEvents } from "../Api/events.jsx";
import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { EventCard } from "../components/EventCard.jsx";

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
      <div className="events_list">
        {events &&
          events.map((event) => (
            <div className="event" key={event.id}>
              <EventCard event={event} />
            </div>
          ))}
      </div>
    </div>
  );
};
