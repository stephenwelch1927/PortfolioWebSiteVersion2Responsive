import Card from "react-bootstrap/Card";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import  Global from './GlobalBeer.css';

const GlobalBeer = () => {
  return (
    <div>
      <h1>Global Beer Website</h1>
        <div>
     
      <Card style={{ width: "100%" }} class="p-3 mb-2 bg-secondary">
        <Card.Body>
          <Card.Title>
            A Website for Purchasing Beers Across the Globe
          </Card.Title>
          <Card.Text>
            <br></br>
            This website was created for the purpose of storing and updating
            beer stock and allowing the customer to make purchases. The site has
            many different features that include a sign-in form and admin section
            that would allow the user to use the site from an admin point of
            view. The site has full CRUD capabilities, the data is then stored
            in the database where we can access and update the database. This
            site has both a Front End and Back End, we use React JavaScript for
            our Front End and for our server we use NodeJs. We achieved our
            outcome using the MERN stack tech.
          </Card.Text>
          <br></br>
          <br></br>
          <div className="frame">
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/XO02gnEq3-Y?si=goObEup3Q01nuPVR"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <br></br>
          <br></br>
          <Card.Link
            className="git-source-code"
            href="https://github.com/Walter64/Professional-Practice-Project"
          >
            <BsGithub size={30}></BsGithub> Git Hub Source Code{" "}
          </Card.Link>
        </Card.Body>
      </Card>

      <h2 className="h2-style">Technologies Used</h2>
      <h3 className="icon">
        <FaReact size={35}></FaReact> React
      </h3>
      <h3 className="icon">
        <DiNodejs size={35}></DiNodejs> NodeJs
      </h3>
      <h3 className="icon">
        <SiMongodb size={35}></SiMongodb> MongoDB
      </h3>
      <h3 className="icon">
        <BsGithub size={35}></BsGithub> GitHub
      </h3>
      <br></br>
      </div>
    </div>

  );
};

export default GlobalBeer;
