import { useState, useEffect } from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";

export default function Tutorials(props) {

    // isLoading state for testing loading skeletons
    const [isLoading, setIsLoading] = useState(true);

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
    useEffect(() => { getTutorialsData() }, []);

    const loaded = () => {
        //if data received, render with JSX
        return tutorials.map(({ title, url, id }, index) => {
            return (

                <div id="tutorials-container" key={title}>
                    <h3 style={{ width: "70%", margin: "0px auto", whiteSpace: "pre-line" }}>{title}</h3>
                    <YoutubeEmbed embedId={id} frameSize={props.frameSize} />

                    {/* Remove the last <hr> separator */}
                    {index !== tutorials.length - 1 && (
                        <hr style={{ width: "773px", margin: "0px auto" }} />
                    )}
                    <br /> {/**873 */}
                </div>
            )
        })
    }

    const loading = () => {
        return (
            <div>
                <br />
                {/* Skeleton tutorial cards */}
                {[1, 2, 3].map((item) => (
                    <div id="tutorials-container" key={item}>
                        <div className="skeleton-text" style={{ width: "30%", height: "20px", margin: "0px auto" }}></div>
                        <div className="skeleton-image" style={{ width: "700px", height: "450px", margin: "20px auto" }}>
                            <div className="skeleton-vid-info">
                                <div className="skeleton-text skeleton-text-short"></div>
                                <div className="skeleton-text skeleton-text-short"></div>
                                <div className="skeleton-text skeleton-text-short"></div>
                            </div>
                        </div>
                        <hr style={{ width: "773px", margin: "0px auto" }} />
                        <br />
                    </div>
                ))}
            </div>
        );
    }

    return tutorials ? loaded() : loading();
}