import React, {useState} from 'react'

export default function Textform(props) {
    const Clicked=()=>{
        console.log('Uppercase was clicked'+ text);
        let Upper=text.toUpperCase();
        setText(Upper);
        props.showAlert('Converted to Uppercase','success ');
    }
    const ClickedS=()=>{
        console.log('Lowercase was clicked'+ text);
        let Lower=text.toLowerCase();
        setText(Lower);
        props.showAlert('Converted to Lowercase','success ');
    }
    const Copyit=()=>{
       
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied','success ');
    }
    const Clears=()=>{
        setText('');
    }
    const Clicker=(E)=>{
        console.log('on change');
        setText(E.target.value);
    }
    const [text,setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}  onChange={Clicker} style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={Clicked}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={ClickedS}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={Copyit}>Copy</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-2 my-1" onClick={Clears}>Clear</button>
        </div>
        <div className='container my-2' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        {/* <p>{text.split(' ').length} words and {text.length} characters</p> */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
        </div>
        </>
    )
}
