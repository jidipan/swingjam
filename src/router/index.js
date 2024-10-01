import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'; // 导入 HomePage 组件
import EventRelease from '../views/EventRelease.vue'; // 导入 EventRelease 组件

const routes = [
  {
    path: '/', // 根路径
    name: 'HomePage',
    component: HomePage // 将 HomePage 设置为默认组件
  },
  {
    path: '/event-release', // EventRelease 页面路径
    name: 'EventRelease',
    component: EventRelease // 将 EventRelease 设置为该路径对应的组件
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
