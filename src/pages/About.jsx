import { Link} from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";

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

    //define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <br/>
            <h3 id="business-card">*Business Card*</h3>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front"> 
                        <img src="./logo1.png" alt="ThatSombraCoder" style={{width: "60%"}}/>                       
                        
                    </div>
                    <div className="flip-card-back">
                        <img src={about.headshot} alt="headshot" style={{width: "85px", height:"300px", border: "2px solid black"}}/>
                        <div style={{width: "50%"}}>
                            <h2 className="highlight">ThatShadowCoder</h2> <br/>                           
                            <p>
                                <span style={{textDecoration: "underline", fontFamily: "Black Ops One"}}>Full Stack Engineer</span> 
                            </p>
                            <p style={{marginLeft: "-100px"}}>Lover of ...</p>                                                          
                            <ul style={{margin: "0px auto", width:"fit-content"}}>
                                <li>Life</li>
                                <li>Learning</li>
                                <li>Lambdas</li>
                                <li>and All Things <img id="img-sky" src={"../sky-black.png"} onClick={props.toggleModal}/></li>
                            </ul>                            
                            <a 
                                href="https://www.youtube.com/channel/UClXA3La1YE-vEODjPhdyiug" 
                                target="_blank" rel="noopener noreferrer">
                                <img 
                                    src="./youtube.png" 
                                    alt="YouTube-icon" 
                                    style={{width:"75px"}}
                                />
                            </a> <br/>
                            <Link to="/contact" onClick={props.turnOff} style={{marginTop: "2px"}}>CONTACT</Link>                            
                        </div>
                    </div>
                </div>
            </div>
            <Modal modal={props.modal} toggleModal={props.toggleModal}/>
        </div>
    );

    //if data arrives return the result of loaded, if not, an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>;
}