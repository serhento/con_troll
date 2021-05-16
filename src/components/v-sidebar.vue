<template>
    <aside v-if="isShow" class="v-sidebar">
        <button @click="$emit('sidebarClose')" class="v-sidebar_close-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z"/></svg>
        </button>
        <ul>
            <li>
                <router-link :to="{name: 'main'}">
                    <p>Галерея</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'bio'}">
                    <p>Обо мне</p>
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "v-sidebar",
        props: ['isShow']
    }
</script>

<style lang="scss">
    .v-sidebar{
        position: fixed;
        transition: all .5s;
        width: 10rem;
        background: lighten(#363232, 10%);
        height: 100%;
        z-index: 2;

        &_close-button{
            border: none;
            position: absolute;
            background-color: #fff;
            top: 0;
            right: 0;
            cursor: pointer;
            height: 24px;
            padding: 0;

            &:hover{
                svg{
                    fill: rgba(250, 40, 40, 0.98);
                }
            }

            svg{
                fill: #000;
                background: lighten(#363232, 10%);
                width: 1.5rem;
            }
        }

        ul{
            padding: 0;
            margin: 2rem 0 0 0;
        }

        a{
            padding: 0.1rem 2rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            width: 17rem;
            height: 2rem;
            border-radius: 8px;
            margin: 0.5rem 1rem;
            text-decoration-line: none;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 20px;
            color: rgba(255, 82, 82, 0.98);

            :hover{
                text-decoration-line: underline;
            }
        }
    }
</style>
