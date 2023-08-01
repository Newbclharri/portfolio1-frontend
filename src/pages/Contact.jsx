import React from "react";
import Form from "../components/Form";

export default function Contact ({UrlPost, URL}) {
    return(
        <div>
            <Form UrlPost={UrlPost} URL={URL}/>
        </div>
    )
}