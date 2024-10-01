<template>
  <div class="home">
    <div class="grey-rectangle"></div>
    <router-link to="/event-release">Go to Event Release</router-link> <!-- 跳转到 EventRelease 页面 -->
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.grey-rectangle {
  width: 200px;
  height: 100px;
  background-color: grey;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
</style>
