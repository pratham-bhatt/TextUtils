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
        <div className="container-fluid" style={{color:props.mode==='light'?'black':'white'}}>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="myBox" className="form-label">{props.heading}</label>
                        <textarea value={text} className="form-control" id="myBox" rows="15" onChange={handleOnChange}style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="outputBox" className="form-label">Output</label>
                        <textarea value={outputText} className="form-control" id="outputBox" rows="15" readOnly style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button disabled={text.length === 0}className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button disabled={text.length === 0}className="btn btn-primary m-1" onClick={handleLowClick}>Convert to Lower case</button>
                    <button disabled={text.length === 0}className="btn btn-primary m-1" onClick={handleCopyClick}>Copy</button>
                    <button disabled={text.length === 0}className="btn btn-primary m-1" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
                </div>
            </div>
        </div>
        <div className="my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h3>Your Text Summary</h3>
            <p>Total numbers of Words is {text.split(/\s+/).filter((element)=>{return element.length!==0;}).length} and total number of characters is {text.length} </p>
            <p>Total numbers of Lines is {text.split('\n').filter((line) => line.trim() !== '').length}  </p>
            {/* To read the 25 word it takes 1 min so 0.008 min is take for reading one word*/}
            <p>Time take to read: {0.008*(text.split(" ").filter((element)=>{return element.length!==0;}).length)}</p>
        </div>
        </>
    );
}
