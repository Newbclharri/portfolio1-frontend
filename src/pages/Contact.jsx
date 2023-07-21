import React from "react";
import Form from "../components/Form";

export default function Contact ({UrlPost}) {
    return(
        <div>
            <h1>Contact Page</h1>
            <Form UrlPost={UrlPost}/>
        </div>
    )
}