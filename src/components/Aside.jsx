import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Aside = ()=> {

    return(
        <div id="Aside">
            <div>
                <h1>Aside</h1>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/projects">PROJECTS</Link>
                <Link to="/tutorials">TUTORIALS</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        </div>
    )
}

export default Aside