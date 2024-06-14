<template>
    <div class="container">
      <div class="user-manager-container">
        <AppSidebar />
        <div class="user-manager-content">
          <div class="user-manager-main">
            <p class="function-name"><font-awesome-icon :icon="['fas', 'file-csv']" /> User CSV</p>
            <div class="user-manager-header">
              <div class="action-buttons">
                <button class="btn-upload" @click="uploadCSV"><font-awesome-icon :icon="['fas', 'upload']" /> Upload</button>
                <button class="btn-download" @click="downloadTemplate"><font-awesome-icon :icon="['fas', 'download']" /> Download template</button>
              </div>
              <p class="status-message" v-if="statusMessage">{{ statusMessage }}</p>
              <div class="table-container">
                <table class="csv-table">
                  <thead>
                    <tr>
                      <th>Value</th>
                      <th>Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Must be string</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>Must be a valid email</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>Must be a number and max length is 11</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>Must be string</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AppSidebar from './AppSidebar.vue';
  
  export default {
    components: {
      AppSidebar
    },
    data() {
      return {
        statusMessage: ''
      };
    },
    methods: {
      uploadCSV() {
        // Logic for uploading CSV
        this.statusMessage = 'Upload file successful!';
        setTimeout(() => {
          this.statusMessage = '';
        }, 3000); // Status message will disappear after 3 seconds
      },
      downloadTemplate() {
        // Logic for downloading template
        this.statusMessage = 'Download file successful!';
        setTimeout(() => {
          this.statusMessage = '';
        }, 3000); // Status message will disappear after 3 seconds
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
    border: 1px solid;
    border-color: #f42f53;
    padding: 10px;
    box-shadow: 4px 4px 9px #ee6464;
    position: relative;
  }
  
  .action-buttons {
    display: flex;
    gap: 20px;
    justify-content: left;
    margin: 20px 10px;
    gap: 30px;
  }
  
  .btn-upload, .btn-download {
    background-color: #32AD37;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px 20px;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }
  
  .btn-upload:hover, .btn-download:hover {
    background-color: #1b871f;
  }
  
  .btn-download {
    background-color: #3498DB;
  }
  
  .btn-download:hover {
    background-color: #1c83c8;
  }
  
  .status-message {
    text-align: center;
    color: #007BE5;
    font-weight: bold;
    position: absolute;
    bottom: 62%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .table-container {
    margin-top: 40px;
    overflow-x: auto;
  }
  
  .csv-table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
  }
  
  .csv-table th, .csv-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .csv-table th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  
  .csv-table td {
    background-color: #fff;
  }
  
  .csv-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .csv-table tr:hover {
    background-color: #ddd;
  }
  </style>
