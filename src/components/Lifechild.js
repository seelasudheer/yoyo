import React, { Component } from 'react'

 class Lifechild extends Component {
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
        console.log('lifechild shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("lifechild getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("lifechild componentDidUpdate")
    }
    render() {
        console.log("render");
        return (
            <div>
            <div>
                Lifcylec class
            </div>
         
        </div>
        )
    }
}

export default Lifechild
