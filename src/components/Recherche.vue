<template lang="html">
  <section class="recherche">
    <div>
      <ul class="nobullet">
        <li>
          <input
            type="text"
            v-model="star"
            @input="findStar($event.target.value)"
          />
          <strong>Star name : {{ star }}</strong>
          <img id="retourSearch" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="js">
import axios from "axios";

  const fullURL = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=mission_exocat&format=json`;
  const SerpApi = require('google-search-results-nodejs');

  export default  {
    name: 'Recherche',
    data() {
      return {
        info : {},
        star: ''
      }
    },
    async created() {
      const result = await axios.get(fullURL);
      this.info = result.data;
    },
    methods: {
      async findStar() {
        const donnees = await axios.post(fullURL, {name: this.star_name});

        this.info = [...this.info, donnees.data];
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
    },
  }
</script>

<style scoped>
.recherche {
  color: white;
}
.img {
  height: 75vw;
  width: 75vw;
  background-repeat: no-repeat;
  background-size: contain;
  margin: auto;
}

.nobullet {
  list-style-type: none;
  margin: 5% 10% 5% 10%;
  line-height: 2;
}

h2 {
  letter-spacing: 4px;
  text-decoration: underline;
}
</style>
