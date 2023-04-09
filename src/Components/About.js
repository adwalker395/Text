import React from 'react'

export default function About(props) {
    // const[mystyle,setmystyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let mystyle={
        color:props.mode==='dark'?'white':'#343a40',
        backgroundColor:props.mode==='dark'?'#343a40':'white',
        borderColor:props.mode==='dark'?'white':'#343a40'
    }

    return (
        <div className='container' style={mystyle}>
            <h1 className='my-3 mx-1'>About Us</h1>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>About Website</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and character. Thus it is suitable for writing text with word/ character limit.  
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong>About Developer</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <p>I'm Akshay.</p>
                            <p>I'm pursuing Bachelor of Computer Applications.</p> 
                            <p>I built this application for Text conversion.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Analyze your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count. 
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
