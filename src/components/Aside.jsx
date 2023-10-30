import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Aside = ({turnOn,turnOff, setActive})=> {

    return(
        <div className="Aside">
            <div>
                <nav id="aside-container">
                    <Link to="/" onClick={turnOn}>HOME</Link>
                    <Link to="/about" onClick={turnOn}>ABOUT</Link>
                    <Link to="/projects" onClick={turnOn}>PROJECTS</Link>
                    <Link to="/tutorials" onClick={turnOn}>TUTORIALS</Link>
                    <Link to="/contact" onClick={turnOff}>CONTACT</Link>
                </nav>
            </div>
        </div>
    )
}

export default Aside