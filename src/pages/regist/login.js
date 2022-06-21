import React from "react";
import loginImg from "../../assets/login.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export class Login extends React.Component {
  
  state = {
    email: '',
    password: ''
  }
  
  handleChangeText = (e) => {
    // console.log(e.target.id)
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  
  handleLoginSubmit = () => {
  
  const {email, password} = this.state
  console.log('data before send: ', email, password);
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('1', user);
    this.setState({
      email: '',
      password: '',
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('2 error', errorCode, errorMessage);
  });
} 


  render() {
    return (
      <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form" onSubmit={this.submit}>
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" id="email" onChange={this.handleChangeText} placeholder="email" value={this.state.email} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" onChange={this.handleChangeText} placeholder="password" value={this.state.password} />
            </div>
          </div>
        </div>
        <div className="flex-container">
        <div className="footer">
          <button type="button" onClick={
            this.handleLoginSubmit
            } className="btn">Login</button>
        </div>
       <nav className="pop">
        <a href="/weather">Weather</a>
       </nav>
        </div>
      </div>
    )
  }
}
    
  
