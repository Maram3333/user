import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  // State to store the list of users
  const [listOfUser, setListOfUser] = useState([]);

  // Fetch users when the component mounts
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data); // Save the API response to state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {listOfUser.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
