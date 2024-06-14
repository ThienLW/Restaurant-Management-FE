<template>
  <div class="container">
    <div class="user-manager-container">
      <AppSidebar />
      <div class="user-manager-content">
        <div class="user-manager-main">
          <div class="user-manager-header">
            <p class="function-name">User Manager</p>
            <div class="search-form">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="name" placeholder="Search with name">
              </div>
              <div class="form-group">
                <label for="email" class="label-email">Email</label>
                <input type="text" id="email" v-model="email" placeholder="Search with email" class="input-email">
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" v-model="phone" placeholder="Search with phone number">
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" v-model="address" placeholder="Search with address" class="input-address">
              </div>
            </div>
          </div>
          <div class="user-manager-actions">
            <div class="action-buttons">
              <button class="btn-delete" @click="deleteUsers"><font-awesome-icon :icon="['fas', 'trash-can']" />Delete</button>
              <button class="btn-create" @click="createUser"><font-awesome-icon :icon="['fas', 'plus']" />Create</button>
            </div>
            <button class="btn-search" @click="searchUsers">Search</button>
          </div>
          <div v-if="!isSearching">
            <UserTable :users="users" />
          </div>
          <div v-else-if="users.length > 0">
            <UserTable :users="users" />
          </div>
          <div v-else class="not-found-message">
            Not Found
          </div>
          <div class="pagination" v-if="users.length > 0">
            <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserTable from './UserTable.vue';
import AppSidebar from './AppSidebar.vue';
import UserService from '../services/UserService';

export default {
  components: {
    AppSidebar,
    UserTable
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      users: [],
      currentPage: 1,
      pageSize: 10,
      totalPages: 1,
      isSearching: false
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const data = await UserService.getUsers(this.currentPage, this.pageSize);
        this.users = data.data;
        this.totalPages = Math.ceil(data.totalUsers / this.pageSize);
        this.isSearching = false;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async searchUsers() {
      try {
        console.log("3: "+this.isSearching)
        const response = await UserService.searchUsers(this.name, this.email, this.phone, this.address, this.currentPage, this.pageSize);
        this.users = response.data.users || [];
        this.totalPages = Math.ceil(response.data.totalUsers / this.pageSize);
        this.isSearching = true;
        console.log("4: "+this.isSearching)
      } catch (error) {
        console.error('Error searching users:', error);
      }
    },
    deleteUsers() {
      // Gọi API để xóa người dùng đã chọn
    },
    createUser() {
      this.$router.push('add-user')// Chuyển hướng đến trang tạo người dùng mới
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        if (this.isSearching) {
          this.searchUsers();
        } else {
          this.fetchUsers();
        }
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        if (this.isSearching) {
          this.searchUsers();
        } else {
          this.fetchUsers();
        }
      }
    }
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700&display=swap');

* {
  font-family: 'Koho', sans-serif;
}

.not-found-message {
  text-align: center;
  font-size: 40px;
  color: #979797;
  margin-top: 200px;
  font-weight: bold;
}

.label-email{
  margin-right: 17px;
}

#name, #phone{
  margin-right: 95px;
}
.function-name{
  margin-top: 2px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
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
  width: 95%; /* Tăng chiều rộng */
  height: 90vh; /* Tăng chiều cao */
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

.search-form {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.search-form .form-group {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 48%;
}

.search-form label {
  font-weight: 500;
}

.search-form input {
  flex: 1;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-weight: 450;
  font-style: normal;
  font-size: 15px;
}

.input-email {
  width: 200px; /* Độ rộng tùy chỉnh cho ô input email */
}

.input-address {
  width: 200px; /* Độ rộng tùy chỉnh cho ô input address */
}

.user-manager-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.action-buttons {
  display: flex;
  gap: 120px;
}

.btn-delete {
  background-color: #DB1B3E;
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
.btn-delete:hover {
  background-color: #a70b28;
}

.btn-create {
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
.btn-create:hover {
  background-color: #1d7a22;
}

.btn-search {
  border: none;
  background-color: #3498DB;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  width: 400px;
  padding: 5px 20px;
  font-size: 20px;
  font-weight: 500;
}
.btn-search:hover {
  background-color: #1882c9;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  margin: 0 10px;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination span {
  font-weight: bold;
}
</style>
