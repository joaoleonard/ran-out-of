import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import HomePage from "@/pages/HomePage.vue";

const routes = [
    {path: '/', redirect: '/login'},
    {path: '/login', component: LoginPage},
    {path: '/sign-up', component: SignUpPage},
    {path: '/home', component: HomePage}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;