import React, { Component } from 'react'
import Postdata from '../Services/Postdata';
//import { Button, FormGroup, FormControl  } from "react-bootstrap";
import "./Login.css";
export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      nameError: '',
      emailError: ''
    }
    this.login =this.login.bind(this);
    // this.onChange=this.onChange.bind(this);
  }
  login(){
   
    Postdata('login',this.state)
    .then((result)=>{
      let resJSON =result;
      console.log("===================>",resJSON);
    })
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      this.validateName();
    });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value }, () => {
      this.validateEmail();
    });
  };

  validateName = () => {
    const { name } = this.state;
    this.setState({
      nameError:
        name.length > 3 ? null : 'Name must be longer than 3 characters'
    });
  }

  validateEmail = () => {
    const { email } = this.state;
    this.setState({
      emailError:
        email.length > 3 ? null : 'Email must be longer than 3 characters'
    });
  }
  handleSubmit = event => {
    
    const { name, email } = this.state;
    alert(`Your state values: \n 
            username: ${name} \n 
            email: ${email}`);
  }

  render() {
    return (
      <div className="bg">
    <div className="Login">
        
    <form onClick={this.login}>
        <div className='form-group'>
      
          <input
            name='name'
            className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
            id='name'
            placeholder='Enter name'
            value={this.state.name}
            onChange={this.handleNameChange}
            onBlur={this.validateName}
          />
          <div className='invalid-feedback'>{this.state.nameError}</div>
        </div>
        <div className='form-group'>
  
          <input
            name='email'
            className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
            id='email'
            placeholder='Enter email'
            value={this.state.email}
            onChange={this.handleEmailChange}
            onBlur={this.validateEmail}
          />
          <div className='invalid-feedback'>{this.state.emailError}</div>
        </div>
        <button type='submit' className='btn btn-success btn-block'>
          Submit
        </button>
      </form>
 
    
    </div>
    </div>
    )
  }
}

export default Login;
