<template>
    <div class="v-header">
        <h1>Con.Troll</h1>
    </div>
</template>

<script>
    export default {
        name: "v-header"
    }
</script>

<style lang="scss">
    .v-header{
        width: 100%;
        max-height: 100px;
        background: rgba(250, 40, 40, 0.98);
        box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.28);
        display: flex;
        justify-content: center;
        align-items: center;

        h1{
            font-style: normal;
            font-size: 48px;
            line-height: 48px;
            letter-spacing: 0.21rem;
        }
    }
</style>
