import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick=() =>{
        console.log("Uppercase was clicked")
        setText("You have clicked ")
    }

    const handleOnChange=() =>{
        console.log("Onchange")
    }
    
    const [text,setText] = useState("Enter text here");
    return (
        <div>
        <form>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <label form="mybox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="3"></textarea>
                </div>
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
            </form>
        </div>
  )
}
