import axios from 'axios';

const API_URL = 'https://localhost:7108/api/Auth/';

class AuthService {
  register(user) {
    return axios.post(`${API_URL}register`, user);
  }

  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password,
      })
      .then(response => {
        if (response.data.data) { // Assuming the token is in response.data.data
          localStorage.setItem('userToken', response.data.data);
          // Save user details (email and name, if provided)
          const userData = {
            // name: response.data.name || "User Name", // Placeholder if name is not provided
            name: response.data.name,
            email: user.email,
          };
          localStorage.setItem('user', JSON.stringify(userData));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user')) || null;
  }
}

export default new AuthService();
