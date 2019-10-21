import React, { Component } from 'react'
import Lifechild from './Lifechild';

 class Lifecycle extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 name:'sudf'
            }
            console.log("reconstructor life");
        }
        
      static getDerivedStateFromProps(props,state){
        console.log("derived");
        return null
      }

      componentDidMount(){
          console.log("compodidmount")
      }
           
          shouldComponentUpdate(){
              console.log('Lifecycle shouldComponentUpdate')
              return true
          }

          getSnapshotBeforeUpdate(){
              console.log("life getSnapshotBeforeUpdate")
              return null
          }
          componentDidUpdate(){
              console.log("componentDidUpdate")
          }

          changestate=() => {
              this.setState({
                  tname:'dude'
              })
          }

    render() {
        console.log("render");
        return (
            <div>
            <div>
                Lifcylec class
            </div>
            <button onClick={this.changestate}>CHANGE</button>
            <Lifechild />
        </div>
        )
    }
}

export default Lifecycle
