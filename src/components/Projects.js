import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Global from "../Img/globalBeer1.png";
import Project from "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <Card
        bg={"secondary"}
        style={{ width: "100%" }}
        className="img1"
      >
        <Card.Title style={{ color: "white" }}>Global Beer Garden</Card.Title>
        <Card.Img variant="top" src={Global} />
        <Card.Body>
          <Card.Text style={{ color: "white" }}>
            This website is a fully functional beer purchasing site, it allows
            the customer to browse and purchase beers from across the globe.
          </Card.Text>

          <Button variant="danger">Global Beer Garden</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Projects;
