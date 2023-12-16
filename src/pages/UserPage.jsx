import React, { useEffect, useState } from "react";
import { getUsers } from "../Api/users";
import { getEventByUser } from "../Api/events";
import { UserCard } from "../components/UserCard";
import { useActiveUser } from "../context/activeUser";
import { ListDisplay } from "../components/List";
import { Button } from "@chakra-ui/react";
import CreateUserModal from "../components/CreateUserModal";

export const UserPage = () => {
  const { activeUser, setActiveUser } = useActiveUser(null);
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState(null);
  const [created, setCreated] = useState(false);

  // const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log("Render UserPage");

  function handleOnClick(user) {
    setActiveUser(user);
  }

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
    setCreated(false);
  }, [created]);

  useEffect(() => {
    if (activeUser) getEventByUser(activeUser.id).then((res) => setEvents(res));
  }, [activeUser]);

  if (!users) {
    console.log("loading...");
    return <div>loading...</div>;
  }

  return activeUser === null ? (
    <div className="user_choose_page">
      <>
        <CreateUserModal setCreated={setCreated} />
      </>
      <div className="user_list">
        <h1>Choose User</h1>
        <Button onClick={() => setActiveUser(null)}>Reset / Other user</Button>
        {users &&
          users.map((user) => (
            <div key={user.id} onClick={() => handleOnClick(user)}>
              <UserCard user={user} />
            </div>
          ))}
      </div>
    </div>
  ) : (
    <>
      <Button onClick={() => setActiveUser(null)}> Clear User</Button>
      <UserCard user={activeUser} />
      <ListDisplay events={events} />
    </>
  );
};
