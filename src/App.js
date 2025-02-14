import logo from "./Img/logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import {HiOutlineMail} from 'react-icons/hi';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const current = new Date();
  const date = `${current.getFullYear()}`;

  return (
    <div className="App">
      <Router>
        <header>
          <div className="container row">
            <button
              onClick={() => setIsNavVisible(!isNavVisible)}
              className="nav-toggle"
              aria-label="open navigation"
            >
              <span class="hamburger"></span>
            </button>
            <h1>
              Stephen Welch Web <br></br>Development
            </h1>
            <nav className={isNavVisible ? "nav nav--visible" : "nav"}>
              <ul class="nav__list nav__list--primary">
                <li class="nav__item">
                  <a href="/" class="nav__link">
                    Home
                  </a>
                </li>

                <li class="nav__item">
                  <a href="#" class="nav__link">
                    Projects
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link">
                    About
                  </a>
                </li>
              </ul>
              <ul class="nav__list nav__list--secondary">
                <li class="nav__item">
                  <a
                    href="https://www.linkedin.com/in/stephen-welch-web-developer"
                    class="nav__link"
                  >
                    <FaLinkedin className="linkedIn"></FaLinkedin>
                  </a>
                </li>
                <li class="nav__item">
                  <a href="https://github.com/stephenwelch1927" class="nav__link nav__link">
                    <BsGithub className="gitHub" />
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link nav__link">
                  <HiOutlineMail className="mail"></HiOutlineMail>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </Router>
      <footer>
        <div className="footer-layout">
          <div className="footer-layout--spacing">
          <a
            href="https://www.linkedin.com/in/stephen-welch-web-developer"
            class="nav__link"
          >
            <FaLinkedin className="linkedIn"></FaLinkedin>
          </a>
          </div>
          <div className="footer-layout--spacing">
          <a href="https://github.com/stephenwelch1927" class="nav__link nav__link">
                    <BsGithub className="gitHub" />
                  </a>
                  </div>
                  <div className="footer-layout--spacing">
        <a href="#" class="nav__link nav__link">
                  <HiOutlineMail className="mail"></HiOutlineMail>
                  </a>
        </div>
        </div>
        <h3>&copy; Stephen Welch {date}</h3>
      </footer>
    </div>
  );
}

export default App;
