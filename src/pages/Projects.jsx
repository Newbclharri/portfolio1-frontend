import { useState, useEffect } from "react";

export default function Projects(props) {
    const windowWidth = props.windowWidth;
    const mobileBreak =  580;
    const minWidth = 450, divisor = 12;
    const width = windowWidth > mobileBreak ? String(props.frameSize.width/divisor) : String(minWidth)
    const height = windowWidth > mobileBreak ? String(props.frameSize.height) : String(205)
    const widthHr = windowWidth > mobileBreak ? String((props.frameSize.width/divisor) + 2): String(minWidth + 10);
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
        return projects.map(({name, live, deployment, repo, repoName, image}) =>{
            const styleBgImg = {
                margin: "0 auto",
                width: width + (windowWidth > 580 ? "vw": "px"),
                height: height + "px",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center"
            }

            return(
                <div id="projects-container" key={name}>
                    <div className="projects" >
                        <h2>{name}</h2>
                        <h3>Live Deployment: <a href={live} target="_blank" rel="noreferrer" id="project-links"><button className="button-main">{deployment}</button></a></h3>
                        <h3>Code: <a href={repo} target="_blank" rel="noreferrer"><button className="button-main">{repoName}</button></a></h3> <br/>
                        <h3>Screenshot:</h3> 
                        <div className="screenshot"
                            style={styleBgImg}
                        ></div>
                    </div>
                    <hr style={{width: widthHr + (windowWidth > 570 ? "vw": "px"), margin: "0px auto"}}/>
                    <br/>
                </div>
                
            )
                
        })
    }
    return projects ? loaded() : <h1>Loading...</h1>;
}