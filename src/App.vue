<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: red;
}

#titreAppli {
  background: springgreen;
  height: 150px;
}

#main {
  border: 2px solid royalblue;
  height: 500px;
}

#search {
  background: yellow;
  height: 250px;
}

#news {
  background: yellowgreen;
  height: 250px;
}

#footer {
  background: turquoise;
  height: 50px;
}
</style>
