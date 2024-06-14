import axios from 'axios';
// API URL
const API_URL = 'https://localhost:7108/api/User';

class UserService {
  async getUsers(page, pageSize) {
    const response = await axios.get(`${API_URL}/userlist`, {
      params: {
        page: page,
        pageSize: pageSize
      }
    });
    return response.data;
  }
  
  searchUsers(name, email, phone, address, page, pageSize) {
    return axios.get(`${API_URL}/searchusers`, {
      params: {
        name: name,
        email: email,
        phone: phone,
        address: address,
        page: page,
        pageSize: pageSize
      }
    });
  }
}

export default new UserService();
