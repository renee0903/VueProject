import { createRouter, createWebHistory } from 'vue-router';
import home from '@/views/home.vue';
import ScenicSpot from '@/views/ScenicSpot.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", name: "home", component: home },
    { path: "/scenicSpot/Taipei", name: "Taipei", component: ScenicSpot },
    { path: "/scenicSpot/NewTaipei", name: "NewTaipei", component: ScenicSpot },
    { path: "/scenicSpot/Taoyuan", name: "Taoyuan", component: ScenicSpot },
    { path: "/scenicSpot/Taichung", name: "Taichung", component: ScenicSpot },
    { path: "/scenicSpot/Tainan", name: "Tainan", component: ScenicSpot },
    { path: "/scenicSpot/Kaohsiung", name: "Kaohsiung", component: ScenicSpot },
  ]
});

router.beforeEach((to, from, next) => {
  next();
});
