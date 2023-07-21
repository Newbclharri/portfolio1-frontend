import React, { useState } from 'react'
import axios from 'axios';

export default function Form() {
    const [data, setData] = useState({name: "", email: "", subject: "", message: ""});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // data[e.target.name] = e.target.value;
        setData({...data, [name]: value})
        console.log(`log ${name}: ${value}`);
        console.log(`${e.target.name}: ${data[e.target.name]}`)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submitted data: ", data);
        const formData = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        }
        console.log({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        })
        fetch("http://localhost:7000/contact", {
            method: 'post',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
       
    }
    return(
        <>
            <form className='email-form' onSubmit={handleSubmit}>
                <h1 id="form-title">Contact Me</h1>
                <input className='basic-info email-info' type="text" name="name" value={data.name} placeholder="full name" id="user-name" onChange={handleChange}/>
                <input className='basic-info email-info' type="email" name="email" value={data.email} placeholder="email address" id="user-email" onChange={handleChange}/>
                <input className='basic-info email-info' type="text" name="subject" placeholder="subject" id="user-email" onChange={handleChange}/>
                <textarea className='text-area email-info' name="message" placeholder='message' id="user-message" cols="80" rows="10" onChange={handleChange}/>
                <button className='button' type="submit">Send Message</button>
            </form>            
        </>
    )

}