<template>
  <div id="home">
    <div class="row justify-content-around">
      <div class="col-12 col-md-6" id="search">
        <b-button>
          <router-link to="/recherche">Recherche</router-link>
        </b-button>
      </div>
      <div class="col-12 col-md-6" id="staroftheday">
        <b-button>
          <router-link to="/starOfTheDay">Photo du jour</router-link>
        </b-button>
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
  background: black;
  padding: 5%;
}
</style>
