import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Divider,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useActiveUser } from "../context/activeUser";

export const EventCard = ({ event }) => {
  const { activeUser } = useActiveUser();

  return (
    <Card w="280px" h="440px">
      <CardBody>
        <Image src={event.image} alt={event.title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{event.title}</Heading>
          <Text>{event.description}</Text>
          <Text color="blue.600" fontSize="l">
            {event.location}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            as={Link}
            to={`/event/` + event.id.toString()}
            variant="solid"
            colorScheme="blue"
          >
            More info
          </Button>
          {activeUser && activeUser.id === event.createdBy ? (
            <Button
              variant="ghost"
              colorScheme="blue"
              as={Link}
              to={`/event/` + event.id.toString() + `/edit`}
            >
              Edit
            </Button>
          ) : null}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
