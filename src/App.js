import logo from './Img/logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="container row">
        <button onClick={()=> setIsNavVisible(!isNavVisible)}
        className="nav-toggle" aria-label="open navigation">
        <span class="hamburger"></span>
        </button> 
        <h1>Stephen Welch Web Development</h1>
          <nav className={isNavVisible ? "nav nav--visible" : "nav"}>
            <ul class="nav__list nav__list--primary">
                    <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
                    <li class="nav__item"><a href="#" class="nav__link">Projects</a></li>
                    <li class="nav__item"><a href="#" class="nav__link">About</a></li>
            </ul>
            <ul class="nav__list nav__list--secondary">
                    <li class="nav__item"><a href="#" class="nav__link">LinkedIn</a></li>
                    <li class="nav__item"><a href="#" class="nav__link nav__link--button">GitHub</a></li>
                    <li class="nav__item"><a href="#" class="nav__link nav__link--button">Mail</a></li>
                </ul>
            </nav>
        </div>
        
      </header>

    </div>
  );
}

export default App;
