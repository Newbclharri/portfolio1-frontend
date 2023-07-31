

export default function Home(){
    
    return (
    <div className="container">
        {/* <h1>Home</h1> */}
        <div id="container-home" style={{flexWrap:"nowrap"}}>
            <div className="column-home" style={{marginLeft: "80px"}}>
                <h1 >software developer</h1><br/>
                <p>A team-oriented problem solver with a drive for mastering systems and contriving solutions</p>
            </div>
            <div><img src="./logo1.png" alt="ThatSombraCoder-logo" /></div>
            <div className="column-home home-col-right">
                <h1 style={{width: "110%"}}>fullstack engineer</h1> <br/>
                <p>Bridging front-end, back-end, and infrastructure across various stacks:</p>
                <p><span>MERN</span>, <span>MEEN</span>, <span>Django</span>...</p>
            </div>
        </div>
    </div>
    );
}