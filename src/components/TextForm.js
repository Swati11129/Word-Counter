/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase wase clicKed"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        // console.log("LowerCase wase clicKed"+ text);
        let newText = text.toLowerCase();
        setText(newText)
    }


 const toTitleCase = ()=>{    
        setText(text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()))
    }
      const toClear = ()=>{
        // let newText = ' '
        setText('')
    }


const handleOnChange= (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // text='next text';// wrong way to change the state
    // setText("new text"); // correct way to change the state
  return (
        <>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick} >UPPER CASE</button>
            <button className='btn btn-primary mx-1' onClick={handleLowClick} >lower case</button>
             <button className='btn btn-primary mx-1' onClick={toTitleCase} >titleCase</button>
             <button className='btn btn-primary mx-1' onClick={toClear} >Clear</button>
        </div>
        <div className='container'>
            <h2> Your text summary</h2>
            <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
            <p>{0.008* text.split(" ").length} Minutes read</p>
            <p>Preview</p>
            <p>{text}</p>
        </div>
        </>
    )

 }