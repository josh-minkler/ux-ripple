import Vue from 'vue';
window.Vue = Vue;

import App from './App.vue';
window.addEventListener('load', function() {
    new Vue({
        el: '#app',
        render: function(h) {
            return h(App);
        }
    });
});
