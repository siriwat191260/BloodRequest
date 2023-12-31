// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../components/Home.vue';
import MainBloodChecklist from '../components/allergy_blood/MainBloodChecklist.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/allergyblood', component: MainBloodChecklist }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
