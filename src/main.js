// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 导入 router
import store from './store';   // 导入 Vuex store
import vuetify from './plugins/vuetify';  // 引入 Vuetify 插件
import '@mdi/font/css/materialdesignicons.css'; // 引入 MDI 图标

// 创建 Vue 实例
const app = createApp(App);

// 使用 Vue 插件
app
  .use(router)  // 使用 Vue Router 进行路由管理
  .use(store)   // 使用 Vuex 进行全局状态管理
  .use(vuetify) // 使用 Vuetify UI 框架
  .mount('#app'); // 挂载应用到 HTML 中的 #app 元素
