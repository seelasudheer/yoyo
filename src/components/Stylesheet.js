import React from 'react'
import './myStyle.css'
 const heado={
     fontSize:'10px',
     color:'blue'
 }
 function Stylesheet(props) {
     let clasName= props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${clasName} font-xl`}>Stylesheet</h1>
            <h2  style={heado}>Inline</h2>
        </div>
    )
}

export default  Stylesheet
    