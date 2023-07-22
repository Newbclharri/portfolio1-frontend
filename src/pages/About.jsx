import { Link} from "react-router-dom";
import { useState, useEffect } from "react";

export default function About(props) {
    //create state variable to hold about data
    const [about, setAbout] = useState(null);
    //create function to make api call
    const getAboutData = async () => {
        //make api call and get response
        const response = await fetch(props.URL + "about");
        //turn response into javascript object
        const data = await response.json();
        //set the about state to the data
        setAbout(data);
    };

    //make an initial call for the data inside a useEFfect, so it only happens once on component load
    useEffect(() => {getAboutData()}, []);
    const turnOn = ()=>{
        props.setActive(true);
    }

    //define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <br/>
            <h3 id="business-card">*Business Card*</h3>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={about.headshot} alt="headshot" style={{width: "85px", height:"300px"}} />
                    </div>
                    <div className="flip-card-back">
                        <h2 className="highlight">ThatShadowCoder</h2><br/>
                        <p><span style={{textDecoration: "underline", fontFamily: "Black Ops One"}}>Full Stack Engineer</span></p><br/>
                        <p>Lover of Life</p><br/>
                        <p>Lover of Learning</p><br/>
                        <Link to="/contact" className="flip-card-link" onClick={turnOn}>CONTACT</Link>
                    </div>
                </div>
            </div>
        </div>
    );

    //if data arrives return the result of loaded, if not, an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>;
}