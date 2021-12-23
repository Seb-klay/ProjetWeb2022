<!--<template lang="html">
  <section class="starOfTheDay">
    <h1>recherche Component</h1>
    <div>
      {{ info }}
    </div>
  </section>
</template>

<script lang="js">
import axios from "axios";

  let API_KEY = "fqvrUTrVu2n2BRZK7xckxiU3YR7QwnCMxbsfrIOP";
  const fullURL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  export default  {
    name: 'starOfTheDay',
    data() {
      return {
        info : [],
        copyright: '',
      }
    },
    async created() {

      const result = await axios.get(fullURL);
      this.info = result.data;
    },
    methods: {
      async findDay() {
        const donnees = await axios.post(fullURL, {name: this.copyright});

        this.info = [...this.info, donnees.data];
        this.copyright = "";
      },
    },
    props: [],
}
</script>

<style scoped>
.recherche {
  background-color: white;
}
</style>
-->
