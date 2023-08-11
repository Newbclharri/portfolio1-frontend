// import PropTypes from "prop-types";
import {React, useLayoutEffect} from "react";

function YoutubeEmbed(props){   
    useLayoutEffect(()=>{console.log(props.frameSize)},[]) 
    return(
        <div className="video-embed">
            <iframe
              width={props.frameSize.width + "vw"} //853
              height={props.frameSize.height +"vh"} // 480
              src={`https://www.youtube.com/embed/${props.embedId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="test"
            />
        </div>
    );
}

export default YoutubeEmbed