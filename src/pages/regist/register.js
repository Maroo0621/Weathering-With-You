import React from "react";
import loginImg from "../../assets/login.svg";
import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFNhe9MWmyt0iqNrL7Q9V81LndU1SIipw",
  authDomain: "weather-app-d1c0d.firebaseapp.com",
  databaseURL: "https://weather-app-d1c0d-default-rtdb.firebaseio.com",
  projectId: "weather-app-d1c0d",
  storageBucket: "weather-app-d1c0d.appspot.com",
  messagingSenderId: "462157168285",
  appId: "1:462157168285:web:b5b4ddc861d076422dde74"
};
initializeApp(firebaseConfig);

export class Register extends React.Component {

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
  
  handleRegisterSubmit = () => {
    // console.log('email: ', this.state.email);
    // console.log('password: ', this.state.password);
    const {email, password} = this.state
    console.log('data before send: ', email, password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('1 masuk', user);
    this.setState({
      email: '',
      password: '',
      username: ''
    })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('2 error', errorCode, errorMessage);
  });
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.username} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" id="email" name="email" onChange={this.handleChangeText} placeholder="email" value={this.state.email} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" id="password" name="password" onChange={this.handleChangeText} placeholder="password" value={this.state.password} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" onClick={this.handleRegisterSubmit} className="btn">Register</button>
        </div>
      </div>
    );
  }
}