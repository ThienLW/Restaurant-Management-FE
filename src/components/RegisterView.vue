<template>
  <div class="login-container">
    <div class="login-right">
      <div class="login-left">
        <img src="../assets/Register_img.jpg" alt="Sushi" class="login-image" />
      </div>
      <div class="login-box">
        <div class="brand-display">
          <img src="../assets/Hokkaido-Restaurant-icon.png" alt="logo">
          <h1 class="brand-name">Sushi Hokkaido</h1>
        </div>
        <div class="welcome-text">
          <p class="welcome-back">Register Now</p>
        </div>
        
        <form @submit.prevent="register">
          <div class="input-group-row">
            <div class="input-group">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" v-model="firstName" placeholder="Enter your first name" required />
            </div>
            <div class="input-group">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" v-model="lastName" placeholder="Enter your last name" required />
            </div>
          </div>
          <div class="input-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" v-model="email" placeholder="Enter your email address" required />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
          </div>
          <div class="input-group">
            <label for="rePassword">Re-Password</label>
            <input type="password" id="rePassword" v-model="rePassword" placeholder="Enter your password again" required />
          </div>
          <div class="input-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" v-model="phone" placeholder="Enter your phone number" required />
          </div>
          <div class="input-group">
            <label for="address">Address</label>
            <input type="text" id="address" v-model="address" placeholder="Enter your address" required />
          </div>
          <button type="submit">REGISTER</button>
        </form>
        <div class="additional-links">
          <p>Already have an account? <router-link to="/" class="log-in">Sign In</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import AuthService from '../services/AuthService';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
      address: ''
    }
  },
  methods: {
    async register() {
      // console.log('First Name:', this.firstName);
      // console.log('Last Name:', this.lastName);
      // console.log('Email:', this.email);
      // console.log('Password:', this.password);
      // console.log('Re-Password:', this.rePassword);
      // console.log('Phone:', this.phone);
      // console.log('Address:', this.address);
      if (this.password !== this.rePassword) {
        alert('Passwords do not match');
        return;
      }

      const user = {
        Name: `${this.firstName} ${this.lastName}`,
        Email: this.email,
        Password: this.password,
        PhoneNumber: this.phone,
        Address: this.address
      };

      try {
        const response = await AuthService.register(user);
        console.log('Registration successful:', response);
        this.$router.push('/');
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Email or Phone Number already in use. Please try again!');
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700&display=swap');

.brand-display {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px; /* Giảm khoảng cách */
}

.brand-display img {
  margin-right: 10px; /* Giảm khoảng cách */
  width: 20%;
}
.brand-name {
  font-family: "Kaushan Script", cursive;
  font-weight: 500;
  font-size: 36px; /* Giảm kích thước chữ */
  font-style: normal;
  margin-bottom: 10px; /* Giảm khoảng cách */
  color: #DB1B3E;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ECCBCB;
}

.login-right {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.login-left {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-image {
  width: 100%; /* Giảm chiều rộng */
  height: 100%;
  max-height: 800px;
  border-radius: 8px 0px 0px 8px;
}

.login-box {
  flex: 1;
  max-width: 500px; /* Giảm chiều rộng tối đa */
  padding: 0px 30px; /* Giảm padding */
  margin: 0px; /* Giảm margin */
  background-color: white;
  text-align: center;
  font-family: "KoHo", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.welcome-text {
  margin-bottom: 20px; /* Giảm khoảng cách */
}

.welcome-back {
  font-size: 24px; /* Giảm kích thước chữ */
  font-weight: bold;
}

.input-group-row {
  display: flex;
  justify-content: space-between;
}

.input-group {
  margin-bottom: 10px; /* Giảm khoảng cách */
  text-align: left;
}

.input-group-row .input-group {
  width: 48%;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="tel"] {
  width: 100%;
  padding: 5px; /* Giảm padding */
  border: 1px solid #ccc;
  border-radius: 10px;
  font-family: "KoHo", sans-serif;
  font-weight: 450;
  font-style: normal;
  font-size: 14px; /* Giảm kích thước chữ */
}

.button-container {
  display: flex;
  justify-content: center; /* Căn giữa nút */
}

button {
  width: 80%; /* Giảm chiều rộng nút */
  padding: 10px;
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 16px;
  font-family: "KoHo", sans-serif;
  font-weight: 600;
  font-style: normal;
  margin: 20px 0 0 0; /* Căn lại margin */
}

button:hover {
  background-color: #1985cd;
}
.log-in {
  margin-left: 7px;
  font-weight: bold;
}
.additional-links {
  margin-top: 50px; /* Giảm khoảng cách */
}

.additional-links a {
  color: #0F3DDE;
  text-decoration: none;
}

.additional-links a:hover {
  text-decoration: underline;
}
</style>


