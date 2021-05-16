import Vue from 'vue';
import Router from 'vue-router';

import vMainBox from '../components/v-main-box';
import vMovie from '../components/v-movie';
import vBio from '../components/v-bio';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/con_troll',
            name: 'main',
            component: vMainBox
        },
        {
            path: '/con_troll/bio',
            name: 'bio',
            component: vBio
        },
        {
            path: '/con_troll/:id',
            name: 'movie',
            component: vMovie,
            props: true
        }
    ]
});

export default router;
