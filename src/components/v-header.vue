<template>
    <div class="v-header">
        <button @click="$emit('sidebarToggle')">
            &#9776;
        </button>
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
        position: relative;
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

        button{
            position: absolute;
            left: 0;
            cursor: pointer;
            font-size: 4rem;
            background: none;
            border: none;
            color: #000;
            margin-bottom: 1rem;
            margin-left: 1rem;
        }
    }
</style>
