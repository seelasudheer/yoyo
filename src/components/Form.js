import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              comments:'',
              topic:'react'
         }
     }
     handleusername = (event) =>{
           this.setState({
               username:event.target.value
           })
     }
     handlecomments = (event) => {
              this.setState({
                  comments:event.target.value
              })
     }
     handletopico=(event) =>{
         this.setState({
             topic:event.target.value
         })
     }
     handlesubmit =(event) =>{
            alert (`${this.state.username} ${this.state.comments}`)
   event.preventDefault()
        }
    render() {
      //  const {username ,comments ,topic} = this.state
        return (
            <form onSubmit={this.handlesubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={this.state.username}
                    onChange={this.handleusername}
                    /></div>
                    <div>
                    <label>Text Area</label>
                    <textarea value={this.state.comments} 
                    onChange={this.handlecomments}
                    />  
                </div>
                 <div>
                     <label>Topic</label>
                     <select value={this.state.topic} onChange={this.handletopico}>
                         <option value="react">react</option>
                         <option value="angular">angular</option>
                         <option value="vue">vue</option>
                         </select>
                     </div>
                     <button type="submit">submit</button>
                </form>
        )
    }
}

export default Form
