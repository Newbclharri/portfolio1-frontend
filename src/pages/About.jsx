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
                        <main id="flip-card-back-main">
                            <div id="container-headshot"><img id="headshot" src={about.headshot} alt="headshot" style={{width: "85px", height:"300px", border: "2px solid black"}}/></div>
                            <div id="back-col-2">
                                <h2 id="back-title" className="highlight">ThatShadowCoder</h2> <br/>
                                <p>
                                    <span style={{textDecoration: "underline", fontFamily: "Black Ops One"}}>Full Stack Engineer</span>
                                </p>
                                <p >Lover of Life, Learning, Lambdas...</p>
                                <p>...and All Things:</p>                                          
                               <img id="img-sky" src={"../sky-black.png"} onClick={props.toggleModal}/>                            
                            </div>
                        </main>
                        <footer id="back-footer">
                            <Link to="/contact" onClick={props.turnOff} id="back-footer-contact">CONTACT</Link>
                            <a
                                href="https://www.youtube.com/channel/UClXA3La1YE-vEODjPhdyiug"
                                target="_blank" rel="noopener noreferrer">
                                <img
                                    src="./youtube.png"
                                    alt="YouTube-icon"
                                    id="back-footer-youtube"
                                />
                            </a>
                        </footer>
                    </div>
                </div>
            </div>
            <Modal modal={props.modal} toggleModal={props.toggleModal}/>
        </div>
    );

    //if data arrives return the result of loaded, if not, an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>;
}