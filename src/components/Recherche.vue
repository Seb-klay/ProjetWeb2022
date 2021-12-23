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
          <strong>Star name : {{ info.star_name }}</strong>
        </li>
      </ul>
    </div>
    <created v-on:star="findStar()"></created>
  </section>
</template>

<script lang="js">
import axios from "axios";

  const fullURL = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=mission_exocat&format=json`;

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

      console.log(result.data);
    },
    methods: {
      async findStar() {
        const donnees = await axios.post(fullURL, {name: this.star_name});

        //const found = result.find(element => element.star_name === star); //star est la variable reçu en paramètre

        this.info = [...this.info, donnees.data];
      },
    },
}
</script>

<style scoped>
.recherche {
  color: white;
  height: 100vh;
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
