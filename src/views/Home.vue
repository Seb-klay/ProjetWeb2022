<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
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
  background: black;
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
