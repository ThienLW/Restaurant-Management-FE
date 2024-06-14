<template>
  <div class="login-container">
    <div class="login-right">
      <div class="login-left">
        <img src="../assets/login_img.jpg" alt="Sushi" class="login-image" />
      </div>
      <div class="login-box">
        <div class="brand-display">
          <img src="../assets/Hokkaido-Restaurant-icon.png" alt="logo">
          <h1 class="brand-name">Sushi Hokkaido</h1>
        </div>
        <div class="welcome-text">
          <p class="welcome-back">Welcome back!</p>
          <p class="welcome-slogan">Your Destination for Exquisite Japanese Cuisine! Log in to explore our special menu and enjoy exceptional service.</p>
        </div>

        <form @submit.prevent="login">
          <div class="input-group">
            <label for="username">Username</label>
            <input type="email" id="username" v-model="email" @focus="clearErrorMessage" placeholder="Enter your email address" required />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" @focus="clearErrorMessage" placeholder="Enter your password" required />
          </div>
          <div class="show-password">
            <input type="checkbox" id="show-password" v-model="showPassword" />
            <label for="show-password">Show password</label>
            <a class="forgot-pass" href="#">Forgot password?</a>
          </div>
          <button type="submit">LOGIN</button>
        </form>

        <!-- Error message -->
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <div class="additional-links">
          <p>Don't have an account? <a href="#" class="sign-up"><router-link to="/register" class="sign-up">Sign Up</router-link></a></p>
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
      email: '',
      password: '',
      showPassword: false,
      errorMessage: '' // Thêm biến errorMessage để lưu thông báo lỗi
    };
  },
  methods: {
    async login() {
      try {
        await AuthService.login({ email: this.email, password: this.password });
        this.$router.push('/usermanager');
      } catch (error) {
        this.errorMessage = 'Login failed. Please check your credentials and try again!'; // Cập nhật thông báo lỗi
        console.error('Login failed', error);
      }
    },
    clearErrorMessage() {
      this.errorMessage = ''; // Xóa thông báo lỗi khi người dùng nhấn vào ô input
    }
  }
};
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700&display=swap');

.brand-display {
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-display img {
  margin-right: 16px;
  width: 20%;
}
.brand-name {
  font-family: "Kaushan Script", cursive;
  font-weight: 500;
  font-size: 40px;
  font-style: normal;
  margin-bottom: 20px;
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
  width: 100%;
  height: fit-content;
  max-height: 700px;
  border-radius: 8px 0px 0px 8px;  
}

.login-box {
  flex: 1;
  max-width: 400px;
  padding: 0px 30px;
  background-color: white;
  text-align: center;
  font-family: "KoHo", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.welcome-text {
  margin-bottom: 30px;
}

.welcome-back{
  font-size: 30px;
  font-weight: 900px;
}

.welcome-slogan{
  font-size: 18px;
  font-weight: 500px;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.show-password {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.show-password input[type="checkbox"] {
  margin: 0px 3px 3px;
}

.show-password a {
  margin-left: auto;
  color: #3498DB;
  text-decoration: none;
}

.show-password a:hover {
  color: #0e78be;
  text-decoration: none;
}

.forgot-pass{
  margin-bottom: 5px;
  font-weight: bold;
  margin-right: 10px;
}

.sign-up {
  margin-left: 5px;
  font-weight: bold;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input[type="email"],
input[type="password"],
input[type="text"] {
  width: 94%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-family: "KoHo", sans-serif;
  font-weight: 450;
  font-style: normal;
  font-size: 15px;
}

button {
  width: 90%;
  padding: 10px;
  background-color: #FF4339;
  color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 16px;
  font-family: "KoHo", sans-serif;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 20px;
}

button:hover {
  background-color: #b71c1c;
}

.additional-links {
  margin-top: 20px;
}

.additional-links a {
  color: #d32f2f;
  text-decoration: none;
}

.additional-links a:hover {
  text-decoration: underline;
}

/* Style cho thông báo lỗi */
.error-message {
  background-color: #f8d7da;
  color: #721c24;
  padding: 2px;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  font-family: "KoHo", sans-serif;
  font-weight: 500;
  font-style: normal;
  text-align: center;
}
</style>

