<template>
  <div class="sidebar">
    <div class="brand">
      <img src="../assets/Hokkaido-Restaurant-icon.png" alt="Sushi Hokkaido" class="brand-logo">
      <h1 class="brand-name">Sushi Hokkaido</h1>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Order</router-link></li>
        <li><router-link to="/">Items</router-link></li>
        <!-- <li><router-link to="/">User</router-link></li> -->
        <li class="user-link"><router-link to="/">User</router-link></li>
        <li><router-link to="/import-csv">Import CSV</router-link></li>
      </ul>
    </nav>
    <div class="user-info" v-if="user">
      <div class="user-details">
        <img src="../assets/avatar.png" alt="User Avatar" class="user-avatar">
        <div class="user-text">
          <span class="user-name">{{ user.name }}Thanh Thien Tran</span>
          <span class="user-email">{{ user.email }}</span>
        </div>
        <div class="dropdown" @click="toggleDropdown">
          <span class="show-menu">...</span>
          <ul v-if="dropdownOpen" class="dropdown-menu">
            <li>Your profile</li>
            <li>Settings</li>
            <li @click="logout">Logout</li>
          </ul>
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
      user: null,
      dropdownOpen: false,
    };
  },
  created() {
    this.user = AuthService.getCurrentUser();
  },
  methods: {
    logout() {
      AuthService.logout();
      this.$router.push('/');
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
  },
};
</script>




<style scoped>
.user-link {
  background-color: #fac0c0;
  border-radius: 4px;
}
.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  padding: 20px;
}

.brand {
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  font-family: "Kaushan Script", cursive;
}

.brand-logo {
  width: 90px;
  margin-right: 10px;
}

.brand-name {
  font-weight: 400;
  margin-top: 0;
  color: #DB1B3E;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  margin: 10px 0;
  cursor: pointer;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  padding: 10px;
  display: block;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-weight: bold;
  font-size: 20px;
}

nav ul li:hover a {
  background-color: #f7a3a3;
}

/* User-detail */
.user-info{
  margin-top: 290px;
}
.user-details {
  display: flex;
  align-items: center;
  width: 100%;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 25%;
  margin-right: 10px;
}

.user-text {
  flex-grow: 1;
}

.user-name {
  display: block;
  font-weight: bold;
}

.user-email {
  display: block;
  font-size: 0.9em;
  color: #777;
}

.dropdown {
  position: relative;
  cursor: pointer;
}

/* .dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  list-style: none;
  padding: 0px;
  margin: 0;
  width: 100px;
} */
.show-menu{
  font-weight: bold;
  color: #9B6565;
}
.dropdown-menu {
  position: absolute;
  bottom: 100%; /* Drop up */
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  list-style: none;
  padding: 0px;
  margin: 0;
  width: 100px;
  border-radius: 4px;
}
.dropdown:hover .dropdown-menu {
  display: block; /* Show menu on hover */
}
.dropdown-menu li {
  padding: 5px 10px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #fac0c0;
}
</style>
