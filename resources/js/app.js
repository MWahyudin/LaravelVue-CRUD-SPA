/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))



import Vue from 'vue'
import VueRouter from 'vue-router'
import autofocus from 'vue-autofocus-directive';


Vue.directive('autofocus', autofocus);
Vue.use(VueRouter)

import Index from './components/Index.vue';
import Create from './components/Create.vue';
import Read from './components/Read.vue';
import Update from './components/Update.vue';

const routes = [{
        path: '/',
        component: Index
    },
    {
        path: '/create',
        component: Create
    },
    {
        path: '/read/:id',
        component: Read,
        name: 'readPost'
    },
    {
        path: '/:id/edit',
        component: Update,
        name: 'editPost'
    }
]

import swal from 'sweetalert2';
window.swal = swal;

const toast = swal.mixin({
    position: "top",
    toast: true,
    showConfirmButton: false,

});
window.toast = toast;

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';



Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
    router
}).$mount('#app')
