import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:5000/users';

class UserService {
  login(admin) {
    return axios.post('http://localhost:5000/login', admin);
  }

  signup(admin) {
    return axios.post('http://localhost:5000/signup', admin);
  }

  getUsers() {
    return axios.get(USER_API_BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  createUser(user) {
    return axios.post(USER_API_BASE_URL, user, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  changePassword(user) {
    return axios.post('http://localhost:5000/change-password', user, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  getUserById(userId) {
    return axios.get(`${USER_API_BASE_URL}/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  updateUser(userId, user) {
    return axios.put(`${USER_API_BASE_URL}/${userId}`, user, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  deleteUser(userId) {
    return axios.delete(`${USER_API_BASE_URL}/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }
}

export default new UserService();
