import { EventCard } from "./EventCard";
import { SimpleGrid } from "@chakra-ui/react";
import React from "react";

export function ListDisplay(events) {
  console.log(events.events);

  if (events.events == null) {
    console.log("loading...");
    return <div>loading...</div>;
  }

  return (
    <SimpleGrid minChildWidth="120px" spacing="40px">
      {events &&
        events.events.map((event) => (
          <div className="event" key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
    </SimpleGrid>
  );
}
