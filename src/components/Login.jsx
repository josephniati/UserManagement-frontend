import React, { Component } from 'react';
import UserService from '../services/UserService';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailId: '',
      password: '',
    };

    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);

    this.cancel = this.cancel.bind(this);
  }

  saveOrUpdateUser(e) {
    e.preventDefault();
    let user = {
      emailId: this.state.emailId,
      password: this.state.password,
    };
    UserService.login(user).then((res) => {
      localStorage.setItem('token', res.data.token);
      // this.props.history.push('/users');
      window.location.href = '/users';
    });
  }

  changePasswordHandler(event) {
    this.setState({ password: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ emailId: event.target.value });
  }

  cancel() {
    this.props.history.push('/signup');
  }

  getTitle() {
    return <h3 className='text-center'>Login</h3>;
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

                  <button
                    className='btn btn-success'
                    onClick={this.saveOrUpdateUser}
                  >
                    Login
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={this.cancel}
                    style={{ marginLeft: '10px' }}
                  >
                    Don't have an account? Sign up
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

export default Login;
