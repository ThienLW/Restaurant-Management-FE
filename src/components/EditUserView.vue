<template>
    <div class="container">
      <div class="user-manager-container">
        <AppSidebar />
        <div class="user-manager-content">
          <div class="user-manager-main">
            <div class="user-manager-header">
              <p class="function-name"><font-awesome-icon :icon="['fas', 'user-plus']" /> Edit User</p>
              <div class="form-container">
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text" id="firstName" v-model="firstName" value="First name" required>
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" id="lastName" v-model="lastName" value="Last name" required>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="email" value="Email" required>
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input type="text" id="phone" v-model="phone" value="Phone number" required>
                </div>
                <div class="form-group">
                  <label for="address">Address</label>
                  <input type="text" id="address" v-model="address" value="Address" required>
                </div>
                <!-- <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" id="password" v-model="password" placeholder="Enter password" required>
                </div>
                <div class="form-group">
                  <label for="rePassword">Re-password</label>
                  <input type="password" id="rePassword" v-model="rePassword" placeholder="Enter password again" required>
                </div> -->
                <div class="action-buttons">
                  <button class="btn-confirm" @click="modifyUser"><font-awesome-icon :icon="['fas', 'check']" /> Confirm</button>
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
  // import AuthService from '../services/AuthService';
  
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
      async modifyUser() {
        console.log("Modifyyyy");
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
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px;
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
  #email{
    border: 1px solid #a2a2a2;
  }
  
  .action-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
    gap: 100px;
  }
  
  .btn-confirm {
    background-color: #3498DB;
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
  
  .btn-confirm:hover {
    background-color: #1b7cbd;
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
  