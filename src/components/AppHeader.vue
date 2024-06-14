<template>
    <header class="header">
      <h1 class="title">Sushi Hokkaido</h1>
      <div class="user-info">
        <span>Example User</span>
        <span>exampleuser@gmail.com</span>
      </div>
    </header>
  </template>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  
  .user-info {
    text-align: right;
  }
  </style>
  