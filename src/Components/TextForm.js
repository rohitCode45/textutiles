import React, { useState } from 'react';


export default function TextForm(props) {
    const convertUp = () => {
        // console.log("Button is Clicked");
        setText(text.toUpperCase());

    }
    const convertLow = () => {
        // console.log("Button is Clicked");
        setText(text.toLowerCase());

    }
    const convertSen = () => {
        // console.log("Button is Clicked");
        setText(text.charAt(0).toUpperCase() + text.slice(1));

    }
    const convertCl = () => {
        // console.log("Button is Clicked");
        setText(" ");

    }

    const convertCopy = () => {
        // console.log("Button is Clicked");
        navigator.clipboard.writeText(text);
    }
    const handleOnChange = (event) => {
        // console.log("On change is in use");
        setText(event.target.value)
    }

    const [text, setText] = useState("enter text here.");
    // text = "new twxt";   //Wrong Way
    // setText("new Text");  //Correct Way

    return (
        <>
            <div >
                <div className={`container my-4 `} >
                    <h2>{props.heading}</h2>
                    <textarea value={text} className={`form-control my-4 bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button className={`btn btn-dark`} onClick={convertUp}>Convert Above Text Into Upper case</button>
                    <button className={`btn btn-dark mx-1 `} onClick={convertLow}>Convert Above Text Into Lower case</button>
                    <button className={`btn btn-dark mx-1 `} onClick={convertSen}>Convert Above Text Into Sentence case</button>
                    <button className={`btn btn-dark mx-1 `} onClick={convertCopy}>Copy text</button>
                    <button className={`btn btn-dark mx-1 `} onClick={convertCl}>cleartext</button>

                    <h2 className='my-3'>Counter</h2>
                    <p> {text.split(" ").length} words And {text.length} characters And {text.split(".").length - 1} Lines</p>
                    <h2>Read Time</h2>
                    <p>You can read it in {0.008 * text.split(" ").length} minuts at slow speed</p>
                    <p>You can read it in {0.0033 * text.split(" ").length} minuts at high speed</p>
                    <h2 >Preview</h2>
                    <p>{text}</p>
                </div>
            </div>

        </>
    )
}
