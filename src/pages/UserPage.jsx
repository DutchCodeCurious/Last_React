import React, { useEffect, useState } from "react";
import { getUsers } from "../Api/users";
import { UserCard } from "../components/UserCard";

export const UserPage = () => {
  const [users, setUsers] = useState([]);
  console.log("Render UserPage");

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
          <div className="user" key={user.id}>
            <UserCard user={user} />
          </div>
        ))}
    </div>
  );
};
