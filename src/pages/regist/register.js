import React from "react";
import loginImg from "../../assets/login.svg";
import firebase from "../../services/firebase"

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {}
  set = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }
  handlerRegister = event => {
    const { email, password } = this.state
    event.preventDefault()
    if (!email || !password) return alert('Please insert')
    firebase.auth.createUserwithEmailandPassword(email, password)
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form" onSubmit={this.handlerRegister}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" onChange={this.set('email')} placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}