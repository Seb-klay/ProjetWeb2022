<template lang="html">
  <section id="visibleStars" class="row justify-content-around">
    <div class="col-12 col-md-12">
      <ul class="nobullet">
        <li>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Magnitude</th>
                <th scope="col">Détails</th>
              </tr>
            </thead>
            <tbody v-for="(star, index) in stars" :key="index">
              <tr>
                <th scope="row">{{ index }}</th>
                <td>{{ star.name }}</td>
                <td>{{ star.MAG }}</td>
                <td>
                  <b-button
                    v-on:click="findStar(searchValue)"
                    variant="outline-danger"
                    >Infos</b-button
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="infos">
            <h2>Voisinage de l'étoile</h2>
            <vue-iframe
              :src="ciel"
              frame-id="windowStar"
              width="20%"
              height="20%"
            />
            <div>
              <h2>Informations</h2>
              <b-table stacked :fields="fields" class="table"></b-table>
            </div>
            <div>
              <h2>Position de l'étoile dans le ciel</h2>
              <div id="carteCiel">
                <div id="chart">
                  <scatter-chart :x="this.x" :y="this.y"></scatter-chart>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="js">
import ScatterChart from "@/components/scatterChart";
import JsonStars from "../assets/VisibleStars.json";

export default {
  name: "VisibleStars",
  components: {
    ScatterChart,
  },
  data() {
    return {
      searchValue: "",
      ciel: "",
      stars: JsonStars,
      ind: null,
      infos: false,
    };
  },
  methods: {
    findStar(star) {
      console.warn("on test ici");
      const donnees = JSON.parse(JsonStars);

      while (donnees.name != star) {
        if (donnees.name == star) {
          this.stars = donnees.name == star;
          this.ind = donnees.id;
        }
      }
      //let ra = this.star_info[0].rastr;
      //let dec = this.star_info[0].decstr;
      //this.findLocation(ra, dec);
      //this.starMap(ra, dec);
    },

    findLocation(ra, dec) {
      this.ciel = `http://server1.sky-map.org/skywindow?ra=${ra}&de=${dec}&zoom=7&show_grid=0`;
      this.loaded = true;
    },
    starMap(ra, dec) {
      let degres = 0;
      let heure = 0;
      if (ra.substring(0, 1) == 0) {
        heure = ra.substring(1, 2);
      } else {
        heure = ra.substring(0, 2);
      }
      let minute = ra.substring(5, 3);
      let seconde = ra.substring(8, 6);
      let x = heure + "." + minute + seconde;
      this.x = x;
      if (dec.substring(0, 1) == "-") {
        if (dec.substring(1, 2) == 0) {
          degres = dec.substring(2, 3);
        } else {
          degres = dec.substring(1, 3);
        }
        let mindec = dec.substring(4, 6);
        let secdec = dec.substring(7, 9);
        let y = "-" + degres + "." + mindec + secdec;
        this.y = y;
      } else {
        if (dec.substring(1, 2) == 0) {
          degres = dec.substring(2, 3);
        } else {
          degres = dec.substring(1, 3);
        }
        let mindec = dec.substring(4, 6);
        let secdec = dec.substring(7, 9);
        let y = degres + "." + mindec + secdec;
        this.y = y;
      }
    },
  },
};
</script>

<style>
#visibleStars {
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

#carteCiel {
  width: 100%;
  height: auto;
  background-color: lightgrey;
  background-image: url("../assets/carteDuCiel.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

#chart {
  width: 100%;
  background-color: transparent;
}

.table {
  color: white;
  margin: 5% 0 5% 0;
}
</style>
