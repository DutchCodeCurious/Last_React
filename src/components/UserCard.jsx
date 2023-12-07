import React from "react";
import { useActiveUser } from "../context/activeUser";
import { Box, Flex, Heading, Text, Avatar } from "@chakra-ui/react";

export const UserCard = ({ user }) => {
  const { activeUser } = useActiveUser();
  console.log("Render UserCard");

  return (
    <Box
      className={`user_card ${
        activeUser && activeUser.id === user.id ? "active" : ""
      }`}
    >
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name={user.name} src={user.image} />

          <Box>
            <Heading size="sm">{user.name}</Heading>
            <Text>Creator, Chakra UI</Text>
          </Box>
        </Flex>
        {/** 
        <IconButton
          variant="ghost"
          colorScheme="gray"
          aria-label="See menu"
          icon={<BsThreeDotsVertical />}
        />
        */}
      </Flex>
    </Box>
  );
};
