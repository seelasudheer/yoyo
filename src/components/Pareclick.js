import React, { Component } from 'react'
import Childcompo from './Childcompo'
 class Pareclick extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parent'
             
        }
        this.greetPar =this.greetPar.bind(this)
    }
    
    greetPar(childName){
        alert(`Hello ${this.state.parentName} from ${this.childName}`)
    }

    render() {
        return (
            <div>
                <Childcompo greetHan={this.greetPar}  />
            </div>
        )
    }
}

export default Pareclick
