import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    console.log("Uppercase was clicked" +text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success")
  }
  const handleLoClick =()=>{
    console.log("Lowercase was clicked" +text);
     let newText=text.toLowerCase();
     setText(newText);
     props.showAlert("Converted to Lowercase","success")
   }
   const handleClearClick =()=>{
     console.log("Uppercase was clicked" +text);
     let newText="";
     setText(newText);
     props.showAlert("Text Cleared","success")
   }
  const handleOnChange =(Event)=>{
    //console.log("On change");
    setText(Event.target.value)
    
    
  }
  const handleCopy =()=>{
    console.log("I am copy");
    var text=document.getElementById("mybox");
    text.select();
    //text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Capied to clipboard","success")
  }
  const handleExtraSpaces =()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Remove","success")
  }
  const [text, setText] = useState('');
  return (
    <>
<div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
<h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="ptn ptn-primary mx-2 my-2"  onClick={handleUpClick}>Conver to Uppercase</button>
<button  disabled={text.length===0} className="ptn ptn-primary mx-2 my-2" onClick={handleLoClick}>Conver to Lowercase</button>
<button disabled={text.length===0}  className="ptn ptn-primary mx-2 my-2 " onClick={handleClearClick}>Clear Text</button>
<button  disabled={text.length===0} className="ptn ptn-primary mx-2 my-2 " onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0}  className="ptn ptn-primary mx-2 my-2 " onClick={handleExtraSpaces}> Remove Extra Space</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}} >
      <h1>Your Text summary</h1>
      <p>{text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((Element)=>{return Element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the boxtext above to priview it here"}</p>
    </div>
    </>
  )
}

