<template>
  <div id="app">
    <h1 class="h1">
      <router-link to="/">StarFindr</router-link>
    </h1>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, Press Start 2p, cursive,
    Nothing You Could Do, cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: black;
}

a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: white;
  font-size: 2.5em;
  font-family: "Press Start 2P", cursive;
}

h1 {
  margin: 5%;
  padding: 7%;
  font-size: 10em;
}
</style>
