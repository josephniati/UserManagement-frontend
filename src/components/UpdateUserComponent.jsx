import React, { Component } from 'react';
import UserService from '../services/UserService';

class UpdateUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      firstName: '',
      lastName: '',
      emailId: '',
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      let user = res.data;
      this.setState({
        firstName: user.firstName,
        lastName: user.lastName,
        emailId: user.emailId,
      });
    });
  }

  updateUser(e) {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    UserService.updateUser(this.state.id, user).then((res) => {
      this.props.history.push('/users');
    });
  }

  changeFirstNameHandler(event) {
    this.setState({ firstName: event.target.value });
  }

  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ emailId: event.target.value });
  }

  changePassword() {
    this.props.history.push('/change-password');
  }

  logout() {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  }

  cancel() {
    this.props.history.push('/users');
  }

  render() {
    return (
      <div>
        <br />
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Update User</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>First Name:</label>
                    <input
                      placeholder='First Name'
                      name='firstName'
                      className='form-control'
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Last Name:</label>
                    <input
                      placeholder='Last Name'
                      name='lastName'
                      className='form-control'
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Email Address:</label>
                    <input
                      placeholder='Email Address'
                      name='emailId'
                      className='form-control'
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <button className='btn btn-success' onClick={this.updateUser}>
                    Save
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: '10px' }}
                  >
                    Cancel
                  </button>
                  <button
                    className='btn btn-warning'
                    onClick={this.changePassword}
                    style={{ marginLeft: '10px' }}
                  >
                    Change Password
                  </button>
                  <button
                    className='btn btn-secondary'
                    onClick={this.logout}
                    style={{ marginLeft: '10px' }}
                  >
                    Logout
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

export default UpdateUserComponent;
