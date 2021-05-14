<template>
    <div class="v-main-wrapper">
        <v-header/>
        <keep-alive>
            <router-view>

            </router-view>
        </keep-alive>
    </div>
</template>

<script>
    import vHeader from "./v-header";
    export default {
        name: "v-main-wrapper",
        components:{
            vHeader
        }
    }
</script>

<style lang="scss">
.v-main-wrapper{
    max-width: 1920px;
}
</style>