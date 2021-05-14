<template>
    <div class="v-main-box__area-bottom">
      <img :src="movies_data.poster" alt="">
      <router-link :to="{name: 'movie', params: {id: movies_data.id}}">
        <button @click="movieId">Подробнее</button>
      </router-link>
    </div>
</template>

<script>
    import toFixArray from '../filters/toFixArray';

    export default {
        name: "v-main-box__area-bottom",
        props:{
            movies_data:{
                type: Object,
                default(){
                    return {}
                }
            }
        },
        filters:{
            toFixArray
        },
        methods:{
            movieId(){
                this.$emit('movieId',this.movies_data.id);
            }
        }
    }
</script>

<style lang="scss">
    .v-main-box__area-bottom{
      position: relative;
        display: flex;
        flex-flow: column;
        margin-top: 24px;
        margin-right: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;

        &:hover{
            position: relative;
            top: -8px;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
            transition: all 0.5s ease;

            button{
              opacity: 1;
              transition: all 0.5s ease;
            }

            img{
              opacity: 0.2;
              transition: all 0.5s ease;
            }
        }

        img{
          width: inherit;
          overflow: hidden;
          max-height: 168px;
        }

        button{
          opacity: 0;
          cursor: pointer;
          width: 100%;
          position: absolute;
          bottom: 0;
        }
    }
</style>
