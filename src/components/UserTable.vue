<template>
  <div>
    <table class="user-table">
      <thead>
        <tr>
          <th><input type="checkbox" @click="selectAll"></th>
          <th>User ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Edit User</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" @click="showUserDetails(user)" class="table-row">
          <td @click.stop><input type="checkbox" v-model="selectedUsers" :value="user.id"></td>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phoneNumber }}</td>
          <td>{{ user.address }}</td>
          <td @click.stop>
            <button class="btn-edit" @click="editUser(user.id)"><i class="fas fa-edit"></i></button>
          </td>
        </tr>
      </tbody>
    </table>

    <UserDetailPopup :visible="isPopupVisible" :user="selectedUser" @close="closePopup" />
  </div>
</template>

<script>
import UserDetailPopup from './UserDetailPopup.vue';

export default {
  components: {
    UserDetailPopup
  },
  props: ['users'],
  data() {
    return {
      selectedUsers: [],
      isPopupVisible: false,
      selectedUser: {}
    };
  },
  methods: {
    selectAll(event) {
      this.selectedUsers = event.target.checked ? this.users.map(user => user.id) : [];
    },
    editUser() {
      // this.$router.push(`/edit-user/${userId}`);
      this.$router.push('/edit-user')
    },
    showUserDetails(user) {
      this.selectedUser = user;
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    }
  }
};
</script>

<style scoped>
.user-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.user-table th, .user-table td {
  border: 1px solid #ddd;
  padding: 8px;
  color: #5a5d62;
}

.user-table th {
  background-color: #f8f9fa;
}

.user-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.user-table tbody tr:hover {
  background-color: #ddd;
}

.user-table tbody tr.table-row:hover {
  cursor: pointer;
}

.user-table input[type="checkbox"] {
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  border: 1.5px solid #4cd76c;
  width: 13px;
  height: 13px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.user-table input[type="checkbox"]:checked {
  background-color: #ffffff;
  border: 1.5px solid #4cd76c;
}

.user-table input[type="checkbox"]:checked::before {
  content: '✔';
  color: #4cd76c;
  font-size: 11px;
  position: absolute;
}

.btn-edit {
  cursor: pointer;
  border: 0px;
  background: transparent;
  font-size: 17px;
  color: #5a5d62;
}

.user-table th:first-child,
.user-table td:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-table th:last-child,
.user-table td:last-child {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
