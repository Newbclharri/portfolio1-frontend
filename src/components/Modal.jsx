import {React, useEffect, useState} from "react";
import "../App.css";

const Modal = ({isActiveModal, toggleModal})=> {
    const [modal, setModal] = useState(isActiveModal);
    
    const styleModalTitle = {
        boxShadow: "2px -2px rgba(255,255,255, 0.5)",
        borderRadius: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "aqua",
        textShadow: "-1px 1px black"
    }

    const styleCloseModal = {
        borderRadius: "5px",
        backgroundColor: "rgba(255,255,255, 0.7)",
        marginRight: "5px"
    }   

    useEffect(()=>{
        return setModal(isActiveModal)
    },[isActiveModal])

    return(
        <div>
           {/* {modal || (
                <h1>
                    Hi!
                </h1>
           )} */}

            {modal && (                
                <div className="modal-video">                    
                    <h2 style={styleModalTitle}>
                        Jamming in Sky! 
                        <button 
                            id="button-close" 
                            onClick={toggleModal}
                            style={styleCloseModal}>
                            <h2>X</h2>
                        </button>
                    </h2> 
                    <iframe src="https://www.youtube.com/embed/vfa9UpbTbjw?&autoplay=1" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{boxShadow: "1px 1px 3px 2px rgba(255, 255, 255, 0.5)"}}
                    />
                    
                </div>
                )}
        </div>
    )
}

export default Modal