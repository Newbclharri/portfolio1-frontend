

export default function Home(){
    return (
    <div className="container">
        <h1>Home</h1>
        <div id="container-home">
            <div className="column-home" style={{marginLeft: "80px"}}>
                <h1>software developer</h1><br/>
                <p>A team-oriented problem solver with a drive for mastering systems and contriving solutions</p>
            </div>
            <div><img src="./logo1.png" alt="" /></div>
            <div className="column-home" style={{marginRight: "80px"}}>
                <h1>fullstack engineer</h1> <br/>
                <p style={{width: "112%"}}>Bridging front-end, back-end, and infrastructure across various stacks:</p>
                <p><span>MERN</span>, <span>MEEN</span>, <span>Django</span>...</p>
            </div>
        </div>
    </div>
    );
}