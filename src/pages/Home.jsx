

export default function Home(){
    return (
    <div className="container">
        <h1>Home</h1>
        <div id="container-home">
            <div className="column-home" style={{marginLeft: "80px"}}>
                <h1>software developer</h1><br/>
                <p>A passionate problem solver with a thirst for mastering systems and contriving solutions</p>
            </div>
            <div><img src="./logo1.png" alt="" /></div>
            <div className="column-home" style={{marginRight: "80px"}}>
                <h1>fullstack engineer</h1> <br/>
            </div>
        </div>
    </div>
    );
}