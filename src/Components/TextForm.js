import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter text here");

    const handleUpClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
  return (
    <div>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">{props.heading}</label>
            <textarea value={text} className="form-control" id="myBox" rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
    </div>
  );
}
