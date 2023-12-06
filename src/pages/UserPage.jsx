import React, { useEffect, useState } from "react";
import { getUsers } from "../Api/users";
import { UserCard } from "../components/UserCard";
import { useActiveUser } from "../context/activeUser";

export const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [activeId, setActiveId] = useState(false);
  const { setActiveUser } = useActiveUser();
  console.log("Render UserPage");

  function handleOnClick(id) {
    setActiveUser(id);
    setActiveId(id);
  }

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  if (!users) {
    console.log("loading...");
    return <div>loading...</div>;
  }

  console.log(users);
  return (
    <div className="user_list">
      <h1>Choose User</h1>
      {users &&
        users.map((user) => (
          <div
            className={`user ${activeId === user.id ? "active" : ""}`}
            key={user.id}
            onClick={() => handleOnClick(user.id)}
          >
            <UserCard user={user} />
          </div>
        ))}
    </div>
  );
};
