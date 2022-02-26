import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */"@/views/user/Login.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */"@/views/errorPages/404.vue")
  },
  {
    path: "/",
    name: "Index",
    redirect: "/home",
    component: () => import(/* webpackChunkName: "home" */"@/views/layout/Layout.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */"@/views/home/Home.vue")
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
