import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "@/views/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  // base: "/",
  routes,
});

export default router;
