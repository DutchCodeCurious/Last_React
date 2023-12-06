import React, { useEffect, useState } from "react";
import { getUsers } from "../Api/users";
import { UserCard } from "../components/UserCard";
import { useActiveUser } from "../context/activeUser";

export const UserPage = () => {
  const [users, setUsers] = useState([]);
  // const [activeId, setActiveId] = useState(false);
  const { activeUser, setActiveUser } = useActiveUser();
  console.log("Render UserPage");

  function handleOnClick(user) {
    setActiveUser(user);
    // setActiveId(user.id);
  }

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  if (!users) {
    console.log("loading...");
    return <div>loading...</div>;
  }

  return (
    <div className="user_list">
      <h1>Choose User</h1>
      {users &&
        users.map((user) => (
          <div
            className={`user ${activeUser.id === user.id ? "active" : ""}`}
            key={user.id}
            onClick={() => handleOnClick(user)}
          >
            <UserCard user={user} />
          </div>
        ))}
    </div>
  );
};
