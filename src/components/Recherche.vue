<template lang="html">
  <section id="recherche">
    <div>
      <ul class="nobullet">
        <li>
          <form onsubmit="event.preventDefault();">
            <input
              type="text"
              name="etoilesS"
              v-model="searchValue"
              placeholder="nom exact de l'étoile"
            />
            <b-button type="submit" v-on:click="findStar(searchValue)"
              >Trouver étoile</b-button
            >
          </form>
          <h2>Voisinage de l'étoile</h2>
          <vue-iframe
            :src="ciel"
            @load="loaded"
            frame-id="windowStar"
            width="20%"
            height="20%"
          />
          <div>
            <!-- <p>étoile : {{ this.fields[3] }}</p> -->
            <h2>Informations</h2>
            <b-table
              stacked
              :items="star_info"
              :fields="fields"
              class="table"
            ></b-table>
          </div>
          <div>
            <h2>Position de l'étoile dans le ciel</h2>
            <b-img
              center
              class="carteCiel"
              src="https://in-the-sky.org/data/charts/constellations_map_equ110112.png"
              alt="Carte du ciel"
            ></b-img>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="js">
import axios from "axios";

  const fullURL = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=mission_exocat&format=json`;
  const SerpApi = require('google-search-results-nodejs');
  //const imageSearch = require('image-search-google');

  export default  {
    name: 'Recherche',
    data() {
      return {
        star_info : [],
        searchValue : '',
        fields : [{key:'hip_name', label:'Nom du catalogue HIP'}, {key:'hd_name', label:'Nom du catalogue HD'}, {key: 'tm_name', label: 'Nom du catalogue 2MASS'}, {key: 'rastr', label: 'Ascension droite'}, {key: 'decstr', label: 'Déclinaison'}, {key: 'st_dist', label: 'Distance en parsec'}, {key: 'st_vmag', label: 'Magnitude'}],
        ciel: '',
        loaded: false
      }
    },
    methods: {
      async findStar(star) {
        let constraint = `&where=star_name like '${star}'`;
        const donnees = await axios.get(fullURL + constraint);

        this.star_info = donnees.data;

        let ra = '00h40m32.40s';
        //let ra = this.$data.fields.rastr;
        //console.log("test ra : " + ra);
        let dec = '-23d48m14.4s';
        this.findLocation(ra, dec);
      },

      async findImages(star) {
        let search = new SerpApi.GoogleSearch()
        let result = search.json({
          api_key: `d215573be5b8d841640123c2291c5ec2065d80ac06dc9a90b38e10137c6864c5`,
          q: star,            // search query
          }, (data) => {
          console.log(data),
          console.log(result)
        });
      },
      findLocation(ra, dec) {
        this.ciel = `http://server1.sky-map.org/skywindow?ra=${ra}&de=${dec}&zoom=7&show_grid=0`;
        this.loaded = true;
      }
    },
  }
</script>

<style scoped>
#recherche {
  width: 100%;
  background: black;
}

.nobullet {
  list-style-type: none;
  margin: 5% 10% 5% 10%;
  line-height: 2;
}

h2 {
  font-size: 2em;
  font-weight: bold;
  margin: 5%;
}

.carteCiel {
  width: 100%;
  height: auto;
  margin: 10%;
  background-color: lightgrey;
}

.table {
  color: white;
  margin: 5% 0 5% 0;
}
</style>
