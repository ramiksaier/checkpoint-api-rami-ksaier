import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import User from "./User";

const Listuser = () => {
  const [listuser, setListuser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setListuser(res.data);
    });
  }, []);
  return (
    <div className="affichage">
      {listuser.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Listuser;
