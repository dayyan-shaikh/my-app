import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick=() =>{
        let newText=text.toUpperCase();
        setText(newText )
    }

    const handleloClick=() =>{
        let newText=text.toLowerCase();
        setText(newText )
    }

    const handleOnChange=(event) =>{
        setText(event.target.value);
    }
    
    const [text,setText] = useState("");
    
    return (
        <>
        <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="3"></textarea>
                </div>
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to lowercase</button>
        </div>
        <div className='container my-3'>
                <h1>Your Text Summary</h1>
                <p>{text.length > 0 ? text.split(" ").length: 0} words and {text.length} characters</p>
                <p>{0.008*text.length > 0 ? text.split(" ").length: 0}Minutes read</p>
                
        </div>
        </>
  )
}
