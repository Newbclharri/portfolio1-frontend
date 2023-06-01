import { useState, useEff, useEffect } from "react";

export default function Tutorials(props) {
    //set projects state variable
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
        return tutorials.map(({title, url})=>{
            return(
                <div key={title}>
                    <h1>{title}</h1>
                    <h3>Link:<a href={url} target="_blank" rel="noreferrer"></a></h3>
                </div>

            )
        
        })
    }
    return projects ? loaded() : <h1>Loading...</h1>
}