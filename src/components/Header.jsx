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
    return(
        <header>
            <h1>My Portfolio Page</h1>
        <nav style={navStyle}>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/tutorials">TUTORIALS</Link>
            <Link to="/contact">CONTACT</Link>
        </nav>
        </header>        
    );
}