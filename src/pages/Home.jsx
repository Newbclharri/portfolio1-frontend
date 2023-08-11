import React from "react";

export default function Home(){

    return (    
        <div className="container-home">
            {/* <h1>Home</h1> */}
            <div className="column-home home-col-1">
                <h1><span>software</span> developer</h1><br/>
                <p>A team-oriented problem solver with a drive for mastering systems and contriving solutions</p>
            </div>
            <div className="home-col-2 home-img"></div>
            <div className="column-home home-col-3">
                <h1><span>fullstack</span> engineer</h1><br/>
                <p>Bridging front-end, back-end, and infrastructure across various stacks:</p>
                <p><span>MERN</span>, <span>MEEN</span>, <span>Django</span>...</p>
            </div>
        </div>    
    );
}