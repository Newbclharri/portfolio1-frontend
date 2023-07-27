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
                    <div>
                        <div className="projects" key={name}>
                            <h1>{name}</h1>
                            <h3>Live Deployment: <a href={live} target="_blank" rel="noreferrer" id="project-links"><button>Render</button></a></h3>
                            <h3>Github: <a href={git} target="_blank" rel="noreferrer"><button>Repo</button></a></h3> <br/>
                            <h3>Screenshot:</h3> <img src={image} alt="project 1" style={{width:"1200px"}}/>
                        </div>
                        <hr style={{width: "1220px", margin: "0px auto"}}/>
                        <br/>
                    </div>
                    
                )
                
            })
    }
    return projects ? loaded() : <h1>Loading...</h1>;
}