import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Global from "../Img/globalBeer1.png";
import Holiday from "../Img/holiday1.png";
import Project from "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="container-display">
      <Card
        bg={"light"}
        style={{ width: "100%" }}
        className="img1"
      >
        <Card.Title className="card-title">Global Beer Garden</Card.Title>
        <Card.Img variant="top" src={Global} />
        <Card.Body>
          <Card.Text>
            This website is a fully functional beer purchasing site, it allows
            the customer to browse and purchase beers from across the globe.
          </Card.Text>

          <Button className="btn-style" size="sm">Global Beer Garden</Button>
        </Card.Body>
      </Card>
      <Card
        bg={"light"}
        style={{ width: "100%" }}
        className="img1"
      >
        <Card.Title className="card-title">Holiday Experience</Card.Title>
        <Card.Img variant="top" src={Holiday} />
        <Card.Body>
          <Card.Text>
          Allows the user to update their holiday experiences, users can
          also read other users holiday experience reviews.
          </Card.Text>

          <Button className="btn-style" size="sm">Holiday Experience</Button>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};

export default Projects;
