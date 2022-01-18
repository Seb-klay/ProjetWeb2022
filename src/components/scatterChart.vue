<script>
import { Scatter } from "vue-chartjs";

export default {
  props: ["x", "y"],
  extends: Scatter,
  data() {
    return {
      chartData: {
        datasets: [
          {
            label: "Etoile recherchée",
            borderWidth: 3,
            radius: 10,
            borderColor: "yellow",
            pointStyle: "star",
            data: [
              {
                x: this.x,
                y: this.y,
              },
            ],
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0,
                max: 24,
                stepSize: 1,
                reverse: true,
                beginAtZero: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: -90,
                max: 90,
                stepSize: 10,
                reverse: false,
                beginAtZero: false,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
