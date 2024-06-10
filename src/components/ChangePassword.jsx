import React, { Component } from 'react';
import UserService from '../services/UserService';

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailId: '',
      currentPassword: '',
      newPassword: '',
      secretKey: '',
    };

    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeCurrentPasswordHandler =
      this.changeCurrentPasswordHandler.bind(this);
    this.changeNewPasswordHandler = this.changeNewPasswordHandler.bind(this);
    this.changeSecretKeyHandler = this.changeSecretKeyHandler.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  updatePassword(e) {
    e.preventDefault();
    let user = {
      emailId: this.state.emailId,
      currentPassword: this.state.currentPassword,
      newPassword: this.state.newPassword,
      secretKey: this.state.secretKey,
    };
    UserService.changePassword(user)
      .then((res) => {
        alert('Password changed successfully');
        this.props.history.push('/login');
      })
      .catch((error) => {
        alert('Error changing password: ' + error.response.data.error);
      });
  }

  changeEmailHandler(event) {
    this.setState({ emailId: event.target.value });
  }

  changeCurrentPasswordHandler(event) {
    this.setState({ currentPassword: event.target.value });
  }

  changeNewPasswordHandler(event) {
    this.setState({ newPassword: event.target.value });
  }

  changeSecretKeyHandler(event) {
    this.setState({ secretKey: event.target.value });
  }

  cancel() {
    this.props.history.push('/login');
  }

  getTitle() {
    return <h3 className='text-center'>Change Password</h3>;
  }

  render() {
    return (
      <div>
        <br />
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
                    <label>Current Password:</label>
                    <input
                      placeholder='Current Password'
                      name='currentPassword'
                      type='password'
                      className='form-control'
                      value={this.state.currentPassword}
                      onChange={this.changeCurrentPasswordHandler}
                    />
                  </div>

                  <div className='form-group'>
                    <label>New Password:</label>
                    <input
                      placeholder='New Password'
                      name='newPassword'
                      type='password'
                      className='form-control'
                      value={this.state.newPassword}
                      onChange={this.changeNewPasswordHandler}
                    />
                  </div>

                  <div className='form-group'>
                    <label>Secret Key:</label>
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
                    onClick={this.updatePassword}
                  >
                    Change Password
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={this.cancel}
                    style={{ marginLeft: '10px' }}
                  >
                    Cancel
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

export default ChangePassword;
