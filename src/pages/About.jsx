import { useState, useEffect } from "react";

export default function About(props) {
    // const setColor = () =>{
    //     document.body.style.setProperty("--page-color", "blue");
    // }

    // useEffect(()=>{
    //     setColor();
    // },[])
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
            <img className="bio-pic" src={about.headshot} alt="Calvin Harris"/>
            <h2>{about.name}</h2>
            <h3>Email: {about.email}</h3>
            <p id="bio">{about.bio}</p>
        </div>
    );

    //if data arrives return the result of loaded, if not, an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>;
}