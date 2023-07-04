import { useState, useEff, useEffect } from "react";
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
                <div key={title}>
                    <h1>{title}</h1>
                    <YoutubeEmbed embedId = {id}/>
                    <div style={{
                        backgroundColor:"gray", width:"80%", height:"10px", margin:"0 auto", marginTop:"20px", borderRadius:"10px"
                        }}>
                    </div>
                </div>
            )
        
        })
       
    }
 
    return tutorials ? loaded() : <h1>Loading...</h1>
}