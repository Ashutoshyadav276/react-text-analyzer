import React, {useState} from "react";

//  text = "new text";  //wrong way to change the state
//  setText("new text"); //correct way to change the state
export default function TextForm(props){

 const handleUpClick = () =>{
  let newText = text.toUpperCase();
  setText(newText);
 }

  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  
  const handleOnchange = (event) =>{
    setText(event.target.value);
  }
 

 const[text, setText] = useState(' ');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
           <textarea className="form-control"  value={text} onChange={handleOnchange} id="myBox" rows="10"></textarea>
         </div>
         <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
         <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className='container'>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
