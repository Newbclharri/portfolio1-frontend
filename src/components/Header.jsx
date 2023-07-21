import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto"
    }
    
   const setColor = (newColor) => {
    document.body.style.setProperty('--page-color', newColor);
   }

    // const [pageColor, setColor] = useState("linear-gradient(to right, blue, green");
    // const handleClick = (newColor)=>{
    //     setColor(newColor);
    // }
    // // useEffect(()=>{
    // //   const color = getComputedStyle(document.body).getPropertyValue('--page-contact-color');
    // //   document.body.style.setProperty('--page-contact-color', 'pageColor')
    // //   //console.log(pageColor);
    // // }, [])
  
    return(
        <div>
            <header>
                <h1 className="Header">ThatShadowCoder</h1>
                <nav style={navStyle}>
                    <Link to="/" onClick={()=>setColor("linear-gradient(to right, gray, whitesmoke")}>HOME</Link>
                    <Link to="/about" onClick={()=>setColor("linear-gradient(to right, maroon, white")}>ABOUT</Link>
                    <Link to="/projects" onClick={()=>setColor("linear-gradient(to right, yellow, white")}>PROJECTS</Link>
                    <Link to="/tutorials" onClick={()=>setColor("linear-gradient(to right, green, white")}>TUTORIALS</Link>
                    <Link to="/contact" onClick={()=>setColor("linear-gradient(to right, black, maroon")}>CONTACT</Link>
                </nav>
            </header> 
        </div>       
    );
}
//
