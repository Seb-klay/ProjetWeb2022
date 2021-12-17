<template>
  <div id="app">
    <h2>App Title</h2>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/recherche">Recherche</router-link>
      <!-- <router-link to="/starOfTheDay">Etoile du jour</router-link> -->
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
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(0, 190, 253);
}
</style>
