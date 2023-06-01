
import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("Enter Text Here")
    
    const handleUpClick=()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase","success")


    }
       
    const handleLowClick=()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase","success")

    }
    const Clear=()=>{
      let newText = ""
      setText(newText)
      props.showAlert("Cleared Text","success")

  }
  const Alt = ()=> {
    var chars = text.toLowerCase().split("");//splits a string into an array of substrings, and returns the array
    for (var i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    let a= chars.join("");
    setText(a)
    props.showAlert("Altered","success")

  };
  const skip = ()=> {
    var chars = text.toLowerCase().split(" ");//splits a string into an array of substrings, and returns the array
    for (var i = 1; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    let a= chars.join(" ");
    setText(a)
    props.showAlert("Skipped","success")

  };
  const handleCopy = ()=>{
    // var text = document.getElementById('myBox')
    // text.select()
    navigator.clipboard.writeText(text)
    // document.getSelection().removeAllRanges()
    props.showAlert("Copied to clipboard","success")
  }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Covert to UpperCase</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLowClick}>Covert to LowerCase</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={Alt}>Alternate caps</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={skip}>Skip</button>  
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>  
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={Clear}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>TEXT SUMMARY</h1>
      <p>{text.split(/\s+/).filter((element)=> element.length!==0).length} words and {text.trim().length} characters</p>
     
    </div>
    </>
  )
}
