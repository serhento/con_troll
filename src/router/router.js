import Vue from 'vue';
import Router from 'vue-router';

import vMainBox from '../components/v-main-box';
import vMovie from '../components/v-movie';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/vue_movies',
            name: 'main',
            component: vMainBox
        },
        {
            path: '/vue_movies/:id',
            name: 'movie',
            component: vMovie,
            props: true
        }
    ]
});

export default router;