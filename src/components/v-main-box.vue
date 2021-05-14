<template>
    <div class="v-main-box">
        <div class="v-main-box__area">
            <vPreloader :loading="hidePreload" />
            <div v-if="!hidePreload" class="list">
                <vMainBoxAreaBottom
                        v-for="movie in MOVIES.slice(0, 6)"
                        :key="movie.id"
                        :movies_data="movie"
                        @movieId="movieId"
                />
            </div>

          <div v-if="!hidePreload" class="list">
            <vMainBoxAreaBottom
                v-for="movie in MOVIES.slice(6, 12)"
                :key="movie.id"
                :movies_data="movie"
                @movieId="movieId"
            />
          </div>

          <div v-if="!hidePreload" class="list">
            <vMainBoxAreaBottom
                v-for="movie in MOVIES.slice(12, 18)"
                :key="movie.id"
                :movies_data="movie"
                @movieId="movieId"
            />
          </div>

          <div v-if="!hidePreload" class="list">
            <vMainBoxAreaBottom
                v-for="movie in MOVIES.slice(18, 24)"
                :key="movie.id"
                :movies_data="movie"
                @movieId="movieId"
            />
          </div>

        </div>
    </div>
</template>

<script>
    import vMainBoxAreaBottom from "./v-main-box__area-bottom";
    import vPreloader from "./v-preloader";
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "v-main-box",
        components:{
      vMainBoxAreaBottom, vPreloader
        },
        data(){
            return{
                hidePreload: true
            }
        },
        methods:{
            ...mapActions([
                'GET_PRODUCTS_FROM_API'
            ]),
            movieId(id){
                console.log(id)
            }
        },
        computed:{
            ...mapGetters([
                "MOVIES"
            ])
        },
        watch: {
            '$route.params.id'() {
                this.hidePreload=true;
                this.GET_PRODUCTS_FROM_API()
                    .then((res)=> {
                        if (res.data){
                            this.hidePreload = false
                        }
                    })
            }
        },
        mounted(){
            this.GET_PRODUCTS_FROM_API()
                .then((res)=> {
                    if (res.data){
                        this.hidePreload = false
                    }
                })
        }
    }
</script>

<style lang="scss">
    .v-main-box{
        display: flex;
        justify-content: center;
        width: 100%;

        &__area{
            padding: 0 1rem;

          .list{
            display: flex;
            flex-wrap: wrap;
          }
        }
    }
</style>
