<template>
    <div class="v-movie">
        <router-link :to="{name: 'main'}" class="v-movie__link">
            <svg class="v-movie__link-img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.67 3.86998L9.9 2.09998L0 12L9.9 21.9L11.67 20.13L3.54 12L11.67 3.86998Z" fill="#FF5252" fill-opacity="0.98"/>
            </svg>
            <p class="v-movie__link-text">Назад к списку</p>
        </router-link>

        <vPreloader :loading="hidePreload" />

        <div v-if="!hidePreload">
            <p class="v-movie__link-text">{{title}}</p>
            <p class="v-movie__link-text">id - {{id}}</p>
            <img :src="img" alt="">
        </div>
    </div>
</template>

<script>
    import vPreloader from "./v-preloader";
    import {mapActions} from 'vuex';

    export default {
        name: "v-movie",
        data(){
            return{
                movie: null,
                hidePreload: true
            }
        },
        methods:{
            ...mapActions([
                'GET_MOVIE_FROM_API'
            ])
        },
        components:{
            vPreloader
        },
        props:{
            movie_item_data:{
                type: Object,
                default(){
                    return {}
                }
            },
            id:{},
            title: {},
            img: {}
        },
        watch: {
            '$route.params.id'() {
                this.hidePreload=true;
                this.GET_MOVIE_FROM_API(this.id)
                    .then((res)=> {
                        if (res.data){
                            this.hidePreload = false
                        }
                    })
            }
        },
        mounted(){
            this.GET_MOVIE_FROM_API(this.id)
                .then((res)=> {
                    if (res.data){
                        this.hidePreload = false
                    }
                })
        }
    }
</script>

<style lang="scss">
.v-movie{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 40px auto 0 auto;
    padding: 0 1rem;
    max-width: 1400px;

    &__link{
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
        border-bottom: 1px solid #C4C4C4;
        padding-bottom: 20px;
        margin-bottom: 16px;

        &-text{
            margin: 0;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 20px;
            text-decoration-line: underline;
            color: rgba(255, 82, 82, 0.98);
        }
    }
}
</style>
