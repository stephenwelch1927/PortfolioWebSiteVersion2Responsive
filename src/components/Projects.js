import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Global from "../Img/globalBeer1.png";
import Holiday from "../Img/holiday1.png";
import Food from "../Img/Food_and_Drink_Guide.png";
import MarkDown from "../Img/markDown.png";
import RegEx from "../Img/reExConv.png";
import RandomQuote from "../Img/randomQuote.png";
import TextSimple from "../Img/textSimplifier.png";
import Project from "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="container-display">
        <Card bg={"light"} style={{ width: "100%" }} className="img1">
          <Card.Title className="card-title">Global Beer Garden</Card.Title>
          <Card.Img variant="top" src={Global} />
          <Card.Body>
            <Card.Text>
              This website is a fully functional beer purchasing site, it allows
              the customer to browse and purchase beers from across the globe.
            </Card.Text>
            <Button className="btn-style" size="sm">
              Global Beer Garden
            </Button>
          </Card.Body>
        </Card>
        <Card bg={"light"} style={{ width: "100%" }} className="img1">
          <Card.Title className="card-title">Holiday Experience</Card.Title>
          <Card.Img variant="top" src={Holiday} />
          <Card.Body>
            <Card.Text>
              Allows the user to update their holiday experiences, users can
              also read other users holiday experience reviews.
            </Card.Text>
            <Button className="btn-style" size="sm">
              Holiday Experience
            </Button>
          </Card.Body>
        </Card>

        <Card bg={"light"} style={{ width: "100%" }} className="img1">
          <Card.Title className="card-title">Recipe Mobile App</Card.Title>
          <Card.Img variant="top" src={Food} />
          <Card.Body>
            <Card.Text>
              This mobile app allows the users to browse and update recipes. The
              user will be able to read and post up their favourite recipes.
            </Card.Text>
            <Button className="btn-style" size="sm">
              Recipe App
            </Button>
          </Card.Body>
        </Card>

        <Card bg={"light"} style={{ width: "100%" }} className="img1">
          <Card.Title className="card-title">Markdown Previewer</Card.Title>
          <Card.Img variant="top" src={MarkDown} />
          <Card.Body>
            <Card.Text>
              App built so the user can transform normal words into markdown
              language.
            </Card.Text>
            <Button className="btn-style" size="sm">
              Markdown Prev
            </Button>
          </Card.Body>
        </Card>

        <Card bg={"light"} style={{ width: "100%" }} className="img1">
          <Card.Title className="card-title">
            Regular Expression Parser
          </Card.Title>
          <Card.Img variant="top" src={RegEx} />
          <Card.Body>
            <Card.Text>
              Using the Python language created a command line Regular
              expression parser, the user can input a string and then use one of
              the options to search for the inputted string
            </Card.Text>
            <Button className="btn-style" size="sm">
              Reg Ex Parser
            </Button>
          </Card.Body>
        </Card>

        <Card bg={"light"} style={{ width: "100%" }} className="img1">
          <Card.Title className="card-title">Random Quote Generator</Card.Title>
          <Card.Img variant="top" src={RandomQuote} />
          <Card.Body>
            <Card.Text>
              Created an application that makes an API call to a website, then
              in turn can generate a random quote.
            </Card.Text>
            <Button className="btn-style" size="sm">
              Random Quote
            </Button>
          </Card.Body>
        </Card>

        <Card bg={"light"} style={{ width: "100%" }} className="img1">
          <Card.Title className="card-title">Text Simplifier</Card.Title>
          <Card.Img variant="top" src={TextSimple} />
          <Card.Body>
            <Card.Text>
            A text Simplifier created using JAVA and making use of its Object Oriented
            programming capabilities.
            </Card.Text>
            <Button className="btn-style" size="sm">
              Text Simplifier
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
