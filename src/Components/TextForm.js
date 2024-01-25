import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("");
    const [outputText, updateText] = useState("Output will be shown here");

    const handleUpClick = () => {
        const upperText = text.toUpperCase();
        updateText(upperText);
    }

    const handleLowClick = () => {
        const lowerText = text.toLowerCase();
        updateText(lowerText);
    }
    const handleCopyClick = () => {
        // Select the content of the output textarea
        const outputBox = document.getElementById('outputBox');
        outputBox.select();
        navigator.clipboard.writeText(outputText);
    }
    const handleExtraSpaceClick = () => {
        let inputText = text.replace(/\s+/g, ' ').trim();
        updateText(inputText);
        setText(inputText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="myBox" className="form-label">{props.heading}</label>
                        <textarea value={text} className="form-control" id="myBox" rows="15" onChange={handleOnChange}></textarea>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="outputBox" className="form-label">Output</label>
                        <textarea value={outputText} className="form-control" id="outputBox" rows="15" readOnly></textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button className="btn btn-primary m-1" onClick={handleLowClick}>Convert to Lower case</button>
                    <button className="btn btn-primary m-1" onClick={handleCopyClick}>Copy</button>
                    <button className="btn btn-primary m-1" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
                </div>
            </div>
        </div>
        <div className="my-3">
            <h3>Your Text Summary</h3>
            <p>Total numbers of Words is {text.split(" ").length-1} and total number of characters is {text.length} </p>
            {/* To read the 25 word it takes 1 min so 0.008 min is take for reading one word*/}
            <p>Time take to read: {0.008*(text.split(" ").length-1)}</p>
        </div>
        </>
    );
}
