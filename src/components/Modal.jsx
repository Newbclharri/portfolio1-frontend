import {React, useState} from "react";
import "../App.css";

const Modal = ({modal, toggleModal})=> {
    // const [modal, setModal] = useState(false);
    // const toggleModal = ()=>{
    //     setModal((prev)=>!prev) //callback function behaves sychronously so that modal is updated as expected
    // }

    return(
        <div>
           {/* {modal || (
                <h1>
                    Hi!
                </h1>
           )} */}

            {modal && (                
                <div className="modal-video">                    
                    <h2>
                        Jamming in Sky! 
                        <button id="button-close" onClick={toggleModal}><h2>X</h2></button>
                    </h2> 
                    <iframe src="https://www.youtube.com/embed/vfa9UpbTbjw?&autoplay=1" 
                        frameborder="5"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{boxShadow: "1px 1px 3px 2px black"}}
                    />
                    
                </div>
                )}  
        </div>
    )
}

export default Modal