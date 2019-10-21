import React, { Component } from 'react'

 class UserGreet extends Component {
constructor(props) {
    super(props)

    this.state = {
         isLogin:true
    }
}


    render() {
        return this.state.isLogin
        ? ( <div>
           Welcome sudheer     
            </div>
        ):(<div>Welcome Guest</div>)
    }
}

export default UserGreet;
