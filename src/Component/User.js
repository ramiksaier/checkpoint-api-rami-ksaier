import React from "react";
import { Card } from "react-bootstrap";

const User = ({ user }) => {
  return (
    <div className="aff">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {user.email}
            <br></br>
            <br></br>
            {user.phone}
            <br></br>
            <br></br>
            {user.address.street}
          </Card.Subtitle>
          <Card.Text>{user.website}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
