import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(
      `http://localhost:3003/users/${id}`
    );
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{user.name}</th>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
          </tr>
        </tbody>
      </table>
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
    </div>
  );
};
export default User;