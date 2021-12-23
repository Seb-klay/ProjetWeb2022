<template>
  <div id="app">
    <h1 class="h1"><router-link to="/">StarFindr</router-link></h1>
    <div class="row justify-content-around" id="nav">
      <div id="home"></div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  background: black;
}

#nav {
  padding: 30px;
}
</style>
