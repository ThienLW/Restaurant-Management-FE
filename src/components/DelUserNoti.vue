<!-- <template>
    <div v-if="visible" class="popup">
      <div class="popup-content">
        <span class="close" @click="$emit('close')"><i class="fa-solid fa-x"></i></span>
        <p class="function-name">Delete User</p>
        <div class="text-content">
          <div class="popup-row">
            <span class="label-name">Are you sure you want to delete X user?</span>
          </div>
        </div>
        <div class="popup-footer">
          <button class="btn-modify" @click="modifyUser">
            <i class="fas fa-edit"></i> Modify
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true
      },
      user: {
        type: Object,
        required: true
      }
    },
    methods: {
      modifyUser() {
        console.log("Modify Btn Clicked");
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700&display=swap');
  
  .function-name {
    margin-top: 2px;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(140, 220, 249, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.5s; /* Thêm hiệu ứng fadeIn */
  }
  
  .popup-content {
    background: white;
    padding: 20px 40px;
    border-radius: 10px;
    border: 1px solid;
    border-color: #f42f53;
    box-shadow: 4px 4px 9px #f4637e;
    position: relative;
    width: 600px;
    height: 400px;
    max-width: 90%;
    max-height: 90%;
    animation: slideIn 0.5s; /* Thêm hiệu ứng slideIn */
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .popup-row {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 40px 10px;
  }
  
  .label-name, .label-phone, .label-email {
    font-weight: bold;
    color: #E4572E;
  }
  
  .label-address {
    font-weight: bold;
    color: #E4572E;
    margin-right: 105px; /* Khoảng cách giữa nhãn và nội dung */
  }
  
  .label-name {
    margin-right: 120px; /* Khoảng cách giữa nhãn và nội dung */
  }
  
  .label-email {
    margin-right: 120px; /* Khoảng cách giữa nhãn và nội dung */
  }
  
  .label-phone {
    margin-right: 115px; /* Khoảng cách giữa nhãn và nội dung */
  }
  
  .label-address {
    margin-right: 100px; /* Khoảng cách giữa nhãn và nội dung */
  }
  
  .value {
    flex-grow: 1; /* Đẩy nội dung ra phía bên phải */
    font-weight: bold;
  }
  
  .text-content {
    border: 1px solid;
    border-color: #f42f53;
    padding: 10px;
    box-shadow: 4px 4px 9px #ee6464;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 10px;
    cursor: pointer;
    background-color: #F24E1E;
    padding: 5px 8px;
    color: white;
    border-radius: 2px;
  }
  
  .close:hover {
    background-color: #ff4309;
  }
  
  .popup-footer {
    display: flex;
    justify-content: center; /* Căn giữa nút Modify */
    margin-top: 20px;
  }
  
  .btn-modify {
    background-color: #FB8080;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .btn-modify:hover {
    background-color: #f46a6a;
  }
  </style>
   -->