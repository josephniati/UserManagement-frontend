import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:5000/users'; // Corrected URL

class UserService {
  // get all methods related to user CRUD

  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }

  createUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }

  getUserById(userId) {
    return axios.get(`${USER_API_BASE_URL}/${userId}`);
  }

  updateUser(userId, user) {
    // Added user parameter
    return axios.put(`${USER_API_BASE_URL}/${userId}`, user);
  }

  deleteUser(userId) {
    return axios.delete(`${USER_API_BASE_URL}/${userId}`);
  }
}

// Export the class itself so that you can create an instance of it where needed
export default new UserService();
