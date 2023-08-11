import { Link } from "react-router-dom";
import {React, useState, useEffect, useRef, CSSProperties} from "react";
import MenuButton from "./MenuButton";
import DropdownItem from "./DropdownItem";
export default function Header({turnOn, turnOff, navList, show, toggleDropdown}) {
    
    const toggleBgColor = ()=>{
        const docEle = document.documentElement;
        const transparent = getComputedStyle(docEle).getPropertyValue("--mobile-menu-top-color");
        if(!show){            
            const mobileMenuColor = getComputedStyle(docEle).getPropertyValue("--mobile-menu-color");
            docEle.style.setProperty("--mobile-menu-top-color", mobileMenuColor);
        }else{
            docEle.style.setProperty("--mobile-menu-top-color", "transparent")
        }
    }

    useEffect(()=>{
        if(show){
            window.addEventListener("resize", toggleDropdown());
            toggleBgColor();
        }
        
        return window.removeEventListener("resize", toggleDropdown);
    },[])    

    return(
        <header id="header" className="container-nav">
            <nav className="nav-mobile">
                <MenuButton toggleDropdown={toggleDropdown} toggleBgColor={toggleBgColor}/>                
                <div className={`dropdown-content ${show ? `show`:null}`}>
                    {/* <Link to="/" onClick={turnOff}>HOME</Link>
                    <Link to="/about" onClick={turnOff}>ABOUT</Link>
                    <Link to="/projects" onClick={turnOff}>PROJECTS</Link>
                    <Link to="/tutorials" onClick={turnOff}>TUTORIALS</Link>
                    <Link to="/contact" onClick={turnOn}>CONTACT</Link> */}
                    <DropdownItem navList={navList} turnOff={turnOff} turnOn={turnOn} toggleDropdown={toggleDropdown} toggleBgColor={toggleBgColor} />
                </div>              
            </nav>
        </header>        
    );
}