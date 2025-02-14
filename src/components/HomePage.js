import React from "react";
import Bkk from '../Img/greyScaleBangkok.png';
import home from './HomePage.css';
import TypedIntro from "./TypedIntro";

const HomePage = () => {
    return (
        <div>
          
            
        <TypedIntro />
         <img src={Bkk} alt="Bangkok Roof Top View" />
        </div>
    );
}

export default HomePage;