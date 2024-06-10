import React, { Component } from 'react';
import UserService from '../services/UserService';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      emailId: '',
      password: '',
      secretKey: '',
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeSecretKeyHandler = this.changeSecretKeyHandler.bind(this);

    this.cancel = this.cancel.bind(this);
  }

  saveOrUpdateUser(e) {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      password: this.state.password,
      SECRET_KEY: this.state.secretKey,
    };
    UserService.signup(user).then((res) => {
      this.props.history.push('/login');
    });
  }

  changeFirstNameHandler(event) {
    this.setState({ firstName: event.target.value });
  }

  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }
  changePasswordHandler(event) {
    this.setState({ password: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ emailId: event.target.value });
  }
  changeSecretKeyHandler(event) {
    this.setState({ secretKey: event.target.value });
  }

  cancel() {
    this.props.history.push('/login');
  }

  getTitle() {
    return <h3 className='text-center'>Sign Up</h3>;
  }

  render() {
    return (
      <div>
        <br></br>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              {this.getTitle()}
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>First Name: </label>
                    <input
                      placeholder='First Name'
                      name='firstName'
                      className='form-control'
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Last Name: </label>
                    <input
                      placeholder='Last Name'
                      name='lastName'
                      className='form-control'
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Email Id:</label>
                    <input
                      placeholder='Email Address'
                      name='emailId'
                      className='form-control'
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>

                  <div className='form-group'>
                    <label>Password:</label>
                    <input
                      placeholder='Enter Password'
                      name='password'
                      type='password'
                      className='form-control'
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Secret Key: </label>
                    <input
                      placeholder='Secret Key'
                      name='secretKey'
                      className='form-control'
                      value={this.state.secretKey}
                      onChange={this.changeSecretKeyHandler}
                    />
                  </div>

                  <button
                    className='btn btn-success'
                    onClick={this.saveOrUpdateUser}
                  >
                    Save
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={this.cancel}
                    style={{ marginLeft: '10px' }}
                  >
                    Already have an account? Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
