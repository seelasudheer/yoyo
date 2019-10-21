import React from 'react';
//import { constants } from 'perf_hooks';
// function Greet(){
//     return <h1>Hello show</h1>
// }
const Greet = props => {
    const {name,heroName} = props
return <div> <h1>Hello {name} a.l.p {heroName}</h1>


</div>
}
export default Greet;