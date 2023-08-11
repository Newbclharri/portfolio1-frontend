import {React} from "react";
import { Link } from "react-router-dom";
import {FiHome} from "react-icons/fi";

export default function DropdownItem ({navList, turnOff, turnOn, toggleDropdown, toggleBgColor}){
    const displayList = navList.map((item)=>{
        function handleClick (){
            if(item.title =="CONTACT"){
                turnOff()
            }else{
                turnOn()
            }
            toggleDropdown();
            toggleBgColor();
        }
        return(
            <Link 
                className="dropdown-link"
                key={item.title} 
                to={`/${item.lower}`} 
                onClick={handleClick}>
                <div 
                    style={{display: "flex", alignItems:"center", gap: "30px"}}>
                        {item.icon}{item.title}
                </div>
            </Link>
        )
    })
    

    return(
        <div className="dropdown-items">
            {displayList}
        </div>
    )
}