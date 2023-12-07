import { EventCard } from "./EventCard";
import { SimpleGrid } from "@chakra-ui/react";
import React from "react";

export function ListDisplay(events) {
  return (
    <SimpleGrid minChildWidth="120px" spacing="40px">
      {events &&
        events.map((event) => (
          <div className="event" key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
    </SimpleGrid>
  );
}
