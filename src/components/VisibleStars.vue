<template lang="html">
  <section id="visibleStars" class="row justify-content-around">
    <div class="col-12 col-md-10">
      <div v-if="starChoosen.length === 0">
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
              <td>{{ star.name }}</td>
              <td>{{ star.MAG }}</td>
              <td>
                <b-button v-on:click="findStar(star)" variant="outline-danger"
                  >Infos</b-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <div id="description">
          <div id="aladin-lite-div" v:bind="aladin">{{ aladin }}</div>
          <h2>{{ starChoosen.name }}</h2>
          <h2>{{ starChoosen.MAG }}mg</h2>
        </div>
        <div>
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
import JsonStars from "../assets/VisibleStars.json";

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
    };
  },
  mounted() {
    let aladin = document.createElement('script');
    aladin.setAttribute('src', 'https://aladin.u-strasbg.fr/AladinLite/api/v2/latest/aladin.min.js');
    document.head.appendChild(aladin);
  },
  methods: {
    findStar(star) {
      this.infos == true;

      this.starChoosen = star;

      let ra = star.RA;
      let dec = star.DEC;
      console.log(ra + dec);
      this.aladinPosition(star.name);
      //this.findLocation(ra, dec);
      this.starMap(ra, dec);
    },
    aladinPosition(name) {
      const A = `https://aladin.u-strasbg.fr/AladinLite/api/v2/latest/aladin.min.js`;
      var aldn = A.aladin('#aladin-lite-div', {fov:0.1, target: name});
      this.aladin = aldn;
    },
    //findLocation(ra, dec) {

    //},
    starMap(ra, dec) {
      console.log(ra + dec);
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
      console.log(this.x + this.y);
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
