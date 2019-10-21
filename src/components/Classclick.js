import React, { Component } from 'react'

 class Classclick extends Component {
    //  clickhando(){
    //      console.log("hey yashuuu");
    //  }
constructor(props) {
    super(props)

    this.state = {
         message:'Hello'
    }
    // this.clickhando=this.clickhando.bind(this)
}

//     clickhando(){
//  this.setState({
//      message:'Goodbye'
//  })
//   console.log(this)
//     }

clickhando = () => {
    this.setState({
        message:'Goodbye'
    })
}

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickhando.bind(this)}>bind click</button> */}
               {/* <button onClick={()=>this.clickhando()}>fatarrow click </button> */}
            {/* <button onClick={this.clickhando}>Binding through constructor (correct)</button> */}
            <button onClick={this.clickhando}>Arrow fun as class property</button>
            </div>
        )
    }
}

export default Classclick
