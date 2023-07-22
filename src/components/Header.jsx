import { Link } from "react-router-dom";
import React, {useState, useEffect, useRef, CSSProperties} from "react";


export default function Header({turnOn, isActive, setActive}) {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto"
    }
    const turnOff = ()=>{
        setActive(false)
    }
    const myHeader = useRef(null);
    
    // useEffect(()=> {
    //     document.documentElement.style.setProperty('--hover', "greenyellow")
    //     myHeader.current.style.textShadow = "-2px 2px white"

    // },[])
 

    return(
        <header>
            <nav style={navStyle}>
                <Link to="/" onClick={turnOff}>HOME</Link>
                <Link to="/about" onClick={turnOff}>ABOUT</Link>
                <Link to="/projects" onClick={turnOff}>PROJECTS</Link>
                <Link to="/tutorials" onClick={turnOff}>TUTORIALS</Link>
                <Link to="/contact" onClick={turnOn}>CONTACT</Link>
            </nav>
        </header>        
    );
}