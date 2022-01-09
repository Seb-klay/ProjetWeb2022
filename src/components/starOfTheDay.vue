<template lang="html">
  <section class="staroftheday">
    <div>
      <ul class="nobullet">
        <li>
          <strong>Copyright :</strong>
          {{ info.copyright }}
        </li>
        <li>
          <strong>Date :</strong>
          {{ info.date }}
        </li>
        <li>
          <h2>{{ info.title }}</h2>
          {{ info.explanation }}
        </li>
      </ul>
      <div class="img" :style="`background-image: url(${info.url})`"></div>
    </div>
  </section>
</template>

<script lang="js">
import axios from "axios";

  let API_KEY = "fqvrUTrVu2n2BRZK7xckxiU3YR7QwnCMxbsfrIOP";
  const fullURL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  export default  {
    name: 'StarOfTheDay',
    data() {
      return {
        info : {}
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
      },
    },
}
</script>

<style scoped>
.staroftheday {
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
