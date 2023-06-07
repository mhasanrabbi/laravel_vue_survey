import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Dashboard from "../views/Dashboard.vue";
import Surveys from "../views/Surveys.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DefaultLayout,
    children: [
        { path: "/dashboard", name: "Dashboard", component: Dashboard },
        { path: "/surveys", name: "Surveys", component: Surveys },
    ],
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
