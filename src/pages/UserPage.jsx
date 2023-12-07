import React, { useEffect, useState } from "react";
import { getUsers } from "../Api/users";
import { getEventByUser } from "../Api/events";
import { UserCard } from "../components/UserCard";
import { useActiveUser } from "../context/activeUser";
import { ListDisplay } from "../components/List";

export const UserPage = () => {
  const [users, setUsers] = useState([]);
  const { activeUser, setActiveUser } = useActiveUser(null);
  const [events, setEvents] = useState(null);
  console.log("Render UserPage");

  function handleOnClick(user) {
    setActiveUser(user);
  }

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  useEffect(() => {
    if (activeUser) getEventByUser(activeUser.id).then((res) => setEvents(res));
  }, [activeUser]);

  if (!users) {
    console.log("loading...");
    return <div>loading...</div>;
  }

  return activeUser === null ? (
    <div className="user_list">
      <h1>Choose User</h1>
      <button onClick={() => setActiveUser(null)}> Clear User</button>
      {users &&
        users.map((user) => (
          <div key={user.id} onClick={() => handleOnClick(user)}>
            <UserCard user={user} />
          </div>
        ))}
    </div>
  ) : (
    <>
      <button onClick={() => setActiveUser(null)}> Clear User</button>
      <UserCard user={activeUser} />
      <ListDisplay events={events} />
    </>
  );
};
