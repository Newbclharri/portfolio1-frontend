import React from "react";        

export default function MenuButton ({toggleDropdown, toggleBgColor}) {

    const handleClick = (e)=>{
        toggleDropdown(e);
        toggleBgColor();
    }

    return(
        <div className="menu-button" onClick={handleClick}>
            {/* <p>menu button</p> */}
            <hr className="style-setting"/>
            <hr className="style-setting"/>
            <hr className="style-setting"/>
        </div>
    )
}