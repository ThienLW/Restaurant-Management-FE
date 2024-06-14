<template>
  <div class="container">
    <div class="user-manager-container">
      <AppSidebar />
      <div class="user-manager-content">
        <div class="user-manager-main">
          <div class="user-manager-header">
            <p class="function-name"><font-awesome-icon :icon="['fas', 'user-plus']" /> Create User</p>
            <div class="form-container">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" v-model="firstName" placeholder="Enter first name" required>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" v-model="lastName" placeholder="Enter last name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" placeholder="Enter email" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" id="phone" v-model="phone" placeholder="Enter phone number" required>
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" v-model="address" placeholder="Enter address" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" placeholder="Enter password" required>
              </div>
              <div class="form-group">
                <label for="rePassword">Re-password</label>
                <input type="password" id="rePassword" v-model="rePassword" placeholder="Enter password again" required>
              </div>
              <div class="action-buttons">
                <button class="btn-add" @click="validateAndAddUser"><font-awesome-icon :icon="['fas', 'plus']" /> Add</button>
                <button class="btn-cancel" @click="cancel"><i class="fa-solid fa-x"></i> Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from './AppSidebar.vue';
import AuthService from '../services/AuthService';

export default {
  components: {
    AppSidebar
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      rePassword: ''
    };
  },
  methods: {
    async addUser() {
      const newUser = {
        Name: `${this.firstName} ${this.lastName}`,
        Email: this.email,
        Password: this.password,
        PhoneNumber: this.phone,
        Address: this.address
      };

      try {
        const response = await AuthService.register(newUser);
        console.log('Add new user successful:', response);
        this.$router.push('/usermanager');
      } catch (error) {
        console.error('Add user failed:', error);
        alert('Email or Phone number is already used in another account!');
      }
    },
    validateAndAddUser() {
      if (!this.firstName || !this.lastName || !this.email || !this.phone || !this.address || !this.password || !this.rePassword) {
        alert('All fields are required.');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        alert('Please enter a valid email address.');
        return;
      }

      const phonePattern = /^[0-9]{10,15}$/;
      if (!phonePattern.test(this.phone)) {
        alert('Please enter a valid phone number.');
        return;
      }

      if (this.password !== this.rePassword) {
        alert('Passwords do not match.');
        return;
      }

      this.addUser();
    },
    cancel() {
      this.$router.push('/usermanager'); // Redirect to user list or another appropriate page
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700&display=swap');

* {
  font-family: 'Koho', sans-serif;
}

.function-name {
  margin-top: 2px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
}

.form-container {
  border: 1px solid;
  border-color: #f42f53;
  padding: 10px;
  box-shadow: 4px 4px 9px #ee6464;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ECCBCB;
}

.user-manager-container {
  display: flex;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 95%;
  height: 90vh;
}

.user-manager-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.user-manager-main {
  padding: 20px;
}

.user-manager-header {
  margin-bottom: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 10px;
  padding: 20px;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 40px;
}

.form-group label {
  font-weight: 500;
  width: 120px; /* Adjust this width as needed */
  font-weight: bold;
  color: #8F1A1A;
}

.form-group input {
  flex: 1;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #272727;
  font-size: 15px;
  font-weight: bold;
}

.action-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
  gap: 100px;
}

.btn-add {
  background-color: #388E3C;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 200px;
  padding: 5px 20px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}

.btn-add:hover {
  background-color: #1d7a22;
}

.btn-cancel {
  background-color: #F24E1E;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 200px;
  padding: 5px 20px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}

.btn-cancel:hover {
  background-color: #eb3b06;
}
</style>
