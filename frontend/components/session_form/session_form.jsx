import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deployDemo = this.deployDemo.bind(this);
  }

  componentWillMount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user=this.state;
    const formType = this.props.formType;
    this.setState({
      username: "",
      password: ""
    });
    if (formType === "login") {
      this.props.login({user});
    } else {
      this.props.signup({user});
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="session_errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  deployDemo() {
    this.props.login({user: {username: "demo", password:"password"}});
  }

  // {this.props.formType}
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="submitForm">
        <br/>
        <div className="login-form">
          <div className="form_header">
            Welcome to YourMunchTime
          </div>
          <br/>
          <div>
            {this.renderErrors()}
            <label>
              <input type="text"
                placeholder="Username *"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
            </label>
            <br/>
            <label>
              <input type="password"
                placeholder="Password *"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                />
            </label>
          </div>
          <br/>
          <input type="submit" value="Submit" className="session_submit"/>
          <div className="form_header">
            Dont Want to Log In?
          </div>
          <div className="demo_button" onClick={this.deployDemo}>Demo</div>
        </div>
      </form>
    );
  }
}


export default withRouter(SessionForm);
