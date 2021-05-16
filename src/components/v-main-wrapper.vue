<template>
    <div class="v-main-wrapper">
        <vHeader @sidebarToggle = "isShow = !isShow"/>
        <vSidebar
                :isShow="isShow"
                @sidebarClose = "isShow = false"
        />

        <keep-alive>
            <router-view>

            </router-view>
        </keep-alive>
    </div>
</template>

<script>
    import vHeader from "./v-header";
    import vSidebar from "./v-sidebar";
    export default {
        name: "v-main-wrapper",
        components:{
            vHeader, vSidebar
        },
        data(){
            return{
                isShow: false
            }
        }
    }
</script>

<style lang="scss">
.v-main-wrapper{
    max-width: 1920px;
}
</style>
