<template>
    <div class="v-main-box__area-bottom">
      <img :src="movies_data.poster" alt="">
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
        display: flex;
        margin-top: 24px;
        margin-right: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;

        &:hover{
            position: relative;
            top: -8px;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
            transition: all 0.5s ease;
        }

        img{
          overflow: hidden;
          max-height: 168px;
        }
    }
</style>
