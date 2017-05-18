import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user=this.state;
    this.setState({
      username: "",
      password: ""
    });
    this.props.processForm({user});
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
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  // {this.props.formType} or {this.navLink()}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br/>
        <div className="login-form">
          <br/>
          {this.renderErrors()}
          <label> Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
              />
          </label>
          <br/>
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input"
              />
          </label>
          <br/>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    );
  }
}

export default withRouter(SessionForm);
