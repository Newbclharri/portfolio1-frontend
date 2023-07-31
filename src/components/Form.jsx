import React from "react";
import '../App.css';
import { useState } from "react";

export default function Form ({UrlPost, URL}) {
    const [data, setData] = useState({name: "", email: "", subject: "", message: ""})

    const handleChange = (e) => {
        console.log("field change");
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]: value})
        console.log(data)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(URL+"contact"); //add NodemailerUser server code to production server site @ render.com and user URL in APP.js
        await fetch(URL + "contact", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        alert("Message Sent Sucessfully!")
        setData({name: "", email:"", subject: "", message: ""})  

    }


    return(
        <div>
            <form className="email-form" onSubmit={handleSubmit}>
                <img src="./logo1.png" alt="ThatSombraCoder" style={{width: "112px", height: "112px", position: "relative", left: "680px", marginTop: "10px"}}/>
                <h1 style={{color: "black"}}>Contact <span className="highlight">ThatSombraCoder</span></h1>
                <input type="text" name="name" placeholder="full name"  value={data.name} id="user-name" onChange={handleChange}/>
                <input type="text" name="email" placeholder="email address" value={data.email} id="user-email" onChange={handleChange}/>
                <input type="text" name="subject" placeholder="subject" value={data.subject} id="subject-email" onChange={handleChange}/>
                <textarea name="message" placeholder="message here" value={data.message} id="message-email" cols="30" rows="10" onChange={handleChange}/>
                <button className="button-main" type="submit">Send Message</button>
            </form>
        </div>
    )
}