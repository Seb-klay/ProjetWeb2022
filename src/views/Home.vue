<template>
  <div id="home">
    <div class="row justify-content-around">
      <div class="col-4 col-md-4" id="search">
        <router-link to="/recherche">Recherche</router-link>
      </div>
      <div class="col-4 col-md-4" id="staroftheday">
        <router-link to="/starOfTheDay"> Photo du jour</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style>
#home {
  text-align: center;
  margin-top: 60px;
  background: black;
  height: 30vh;
}

#search {
  background: rgb(36, 36, 36);
  vertical-align: center;
  /* height: 50vh;
  width: 50vh; */
}

#staroftheday {
  background: rgb(36, 36, 36);
  vertical-align: middle;
  /* height: 50vh;
  width: 50vh; */
}
</style>
