import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "@/views/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // base: "/",
  routes,
});

export default router;
