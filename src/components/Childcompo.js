import React from 'react'

 function Childcompo(props) {
    return (
        <div>
            {/* <button onClick={props.greetHan}>Greet parent</button> */}
            <button onClick={() => props.greetHan('child')}>Greet parent passing param</button>
        </div>
    )
}
export default Childcompo