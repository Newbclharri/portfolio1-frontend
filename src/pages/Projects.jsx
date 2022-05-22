import { useState, useEffect } from "react";

export default function Projects(props) {
    //set projects state variable
    const [projects, setProjects] = useState(null);
    //create function to make api call
    const getProjectsData = async () => {
        //make api call
        const response = await fetch(props.URL + "projects");
        const data = await response.json();
        console.log(data);
        setProjects(data);
    }
    //use useEffect so that function only runs once when component is rendered
    useEffect(() => {getProjectsData()}, []);

    const loaded = () =>{
        //if data received render with JSX
        return projects.map(({name, live, git, image}) =>{
                return(
                    <div key={name}>
                        <h1>{name}</h1>
                        <h3>Live Deployment: <a href={live} target="_blank"><button>Heroku</button></a></h3>
                        <h3>Github: <a href={git} target="_blank"><button>Git Repo</button></a></h3>
                        <h3>Screenshot: <img src={image} alt="project 1"/></h3>

                    </div>
                    
                )
                
            })
    }
    return projects ? loaded() : <h1>Loading...</h1>;
}