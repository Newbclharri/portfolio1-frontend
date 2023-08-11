import { useState, useEffect } from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";

export default function Tutorials(props) {
    //set tutorials state variable
    const [tutorials, setTutorials] = useState(null);
    //create function to make api call
    const getTutorialsData = async () => {
        //make api call
        const response = await fetch(props.URL + "tutorials");
        const data = await response.json();
        console.log(data);
        setTutorials(data);
    }
    //using useEffect so fxn runs just once when rendering page
    useEffect(()=> {getTutorialsData()}, []);

    const loaded = ()=>{
        //if data received, render with JSX
        return tutorials.map(({title, url, id})=>{
            return(

                <div id="tutorials-container" key={title}>
                    <h3 style={{width:"70%", margin: "0px auto", whiteSpace: "pre-line"}}>{title}</h3>
                    <YoutubeEmbed embedId = {id} frameSize={props.frameSize}/>
                    <hr style={{width: "773px", margin: "0px auto"}}/><br/> {/**873 */}
                </div>
            )        
        })       
    } 
    return tutorials ? loaded() : <h1>Loading...</h1>
}