<template lang="html">
  <section id="visibleStars" class="row justify-content-around">
    <div class="col-12 col-md-10">
      <div id="aladin"></div>
      <div v-if="starChoosen.length === 0 || starChoosen === null">
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
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ star.Name }}</td>
              <td>{{ star.Magnitude }}</td>
              <td>
                <b-button v-on:click="findStar(star)" variant="outline-warning"
                  >Infos</b-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <b-button variant="outline-warning" @click="starChoosen = []"
          >Retour</b-button
        >
        <div id="description">
          <div>
            <b-img
              class="star_image"
              src="https://cdn.spacetelescope.org/archives/images/screen/opo9604b.jpg"
              alt="Star image"
            ></b-img>
          </div>
          <ul class="nobullet">
            <li>
              <h2>{{ starChoosen.Name }}</h2>
              <strong>Astronomical name :</strong>
              {{ starChoosen.Astronomical_name }}
            </li>
            <li>
              <strong>Magnitude :</strong>
              {{ starChoosen.Magnitude }}
            </li>
            <li>
              <strong>Meaning :</strong>
              {{ starChoosen.Meaning }}
            </li>
            <li>
              <br />
              {{ infos }}
            </li>
          </ul>
          <div id="carteCiel">
            <div id="chart">
              <scatter-chart :x="this.x" :y="this.y"></scatter-chart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import ScatterChart from "@/components/scatterChart";
import JsonStars from "../assets/100Stars.json";
import axios from "axios";

export default {
  name: "VisibleStars",
  components: {
    ScatterChart,
  },
  data() {
    return {
      stars: JsonStars,
      starChoosen: [],
      aladin: "",
      infos: ""
    };
  },
  methods: {
    findStar(star) {
      this.starChoosen = star;
      console.log(this.starChoosen)

      // let ra = star.RA;
      // let dec = star.DEC;
      // this.findLocation(ra, dec);
      // this.starMap(ra, dec);
      this.wikiInfos();
    },
    findLocation(ra, dec) {
      this.ciel = `http://server1.sky-map.org/skywindow?ra=${ra}&de=${dec}&zoom=9&show_grid=0`;
    },
    async wikiInfos(){
      var name = this.starChoosen.Name.split(" ");
      const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&requestid=${name[0]}&prop=extracts&titles=${name[0]}&formatversion=2&exsentences=10&exlimit=1&explaintext=1`
        try {
          console.log(this.starChoosen)
        const donnees = await axios.get(url);
        this.infos = donnees.data.query.pages[0].extract;
      } catch (e) {
          console.error(e);
      }
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

.star_image {
  width: auto;
  height: 50vh;
}

h2 {
  font-size: 2em;
  font-weight: bold;
  margin: 5%;
  letter-spacing: 4px;
  text-decoration: underline;
}

.nobullet {
  list-style-type: none;
  margin: 5% 10% 5% 10%;
  line-height: 2;
  font-size: 0.5em;
}

#description {
  font-size: 2.5em;
}

#aladin-lite-div {
  width: 100%;
  height: 98%;
}

#carteCiel {
  width: 100%;
  height: auto;
  margin: 3%;
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
