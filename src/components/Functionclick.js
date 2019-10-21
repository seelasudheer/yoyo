

import React from 'react'
 
function clickHandel(){
    console.log("You clicked first one");
}

  function Functionclick() {
    return (
        <div>
            <button onClick={clickHandel}>Click me</button>
        </div>
    )
}
export default Functionclick;