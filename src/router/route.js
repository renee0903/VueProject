import { createRouter, createWebHistory } from 'vue-router';
import home from '@/views/home.vue';
// import taipei from '@/views/taipei.vue';
import newtaipei from '@/views/newtaipei.vue';
import taoyuan from '@/views/taoyuan.vue';
import taichung from '@/views/taichung.vue';
import tainan from '@/views/tainan.vue';
import kaohsiung from '@/views/kaohsiung.vue';
import ScenicSpot from '@/components/ScenicSpot.vue';

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
