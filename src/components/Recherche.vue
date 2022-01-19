<template lang="html">
  <section id="recherche" class="row justify-content-around">
    <div class="col-12 col-md-12">
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
          <div v-if="star_info[0] != null">
            <h2>Voisinage de l'étoile</h2>
            <vue-iframe
              :src="ciel"
              @load="loaded"
              frame-id="windowStar"
              width="20%"
              height="20%"
            />
            <div>
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
import axios from "axios";
import ScatterChart from '@/components/scatterChart'

const fullURL = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=mission_exocat&format=json`;

export default  {
  name: 'Recherche',
  components: {
    ScatterChart
  },
  data() {
    return {
      star_info : [],
      searchValue : '',
      fields : [{key:'hip_name', label:'Nom du catalogue HIP'}, {key:'hd_name', label:'Nom du catalogue HD'}, {key: 'tm_name', label: 'Nom du catalogue 2MASS'}, {key: 'rastr', label: 'Ascension droite'}, {key: 'decstr', label: 'Déclinaison'}, {key: 'st_dist', label: 'Distance en parsec'}, {key: 'st_vmag', label: 'Magnitude'}],
      ciel: ''
    }
  },
  methods: {
    async findStar(star) {
      let constraint = `&where=star_name like '${star}'`;
      const donnees = await axios.get(fullURL + constraint);

      this.star_info = donnees.data;
      let ra = this.star_info[0].rastr;
      let dec = this.star_info[0].decstr;
      this.findLocation(ra, dec);
      this.starMap(ra, dec);
    },

    findLocation(ra, dec) {
      this.ciel = `http://server1.sky-map.org/skywindow?ra=${ra}&de=${dec}&zoom=7&show_grid=0`;
      this.loaded = true;
    },
    starMap(ra, dec) {
      let degres = 0;
      let heure = 0;
      if (ra.substring(0,1) == 0) {
        heure = ra.substring(1,2);
      } else {
        heure = ra.substring(0,2);
      }
        let minute = ra.substring(5, 3) ;
        let seconde = ra.substring(8, 6) ;
        let x = heure + "." + minute + seconde;
        this.x = x;
      if (dec.substring(0,1) == "-") {
        if (dec.substring(1,2) == 0) {
          degres = dec.substring(2, 3);
        } else {
          degres = dec.substring(1, 3);
        }
          let mindec = dec.substring(4, 6);
          let secdec = dec.substring(7, 9);
          let y = "-" + degres + "." + mindec + secdec;
          this.y = y;
      } else {
        if (dec.substring(1,2) == 0) {
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
