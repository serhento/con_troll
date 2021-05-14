<template>
  <div id="app">
    <v-main-wrapper/>
  </div>
</template>

<script>
import vMainWrapper from "@/components/v-main-wrapper";

export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>

<style>
  @font-face {
    font-family: "Roboto";
    src: local("Roboto"),
      url("./fonts/Roboto-Medium.ttf");
  }
  body{
    font-family: "Roboto",sans-serif;
    margin: 0;
    padding: 0;
    background-color: #363232;
  }
  a{
    text-decoration: none;
  }
</style>