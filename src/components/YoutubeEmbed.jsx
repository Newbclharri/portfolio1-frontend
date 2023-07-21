import React from "react";
import PropTypes from "prop-types";


function YoutubeEmbed(props){
    return(
        <div className="video-embed">
            <iframe
            width="853"
            height="480"
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