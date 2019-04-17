import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'

Vue.use(VueRouter);

let router  = new VueRouter({
    mode:"history",
    routes: [
        {
            path:'/',
            name:'Home',
            component: Home
        },
        {
            path:'/login',
            name: 'Login',
            component: Login
        }, 
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]

});

export default router;