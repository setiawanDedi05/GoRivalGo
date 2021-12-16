<template>
  <div class="flex pt-24 grid grid-cols-5">
    <div class="col-span-5">
      <marquee align="center" direction="left" scrollamount="8" width="100%"
        ><span class="shadow-lg"
          >Prediksi Cuaca Hari ini -> {{ getWeaterText }}</span
        ></marquee
      >
    </div>
    <Left
      :profileTeam="profileTeam"
      :totalMatch="getTotalmatch"
      :totalWin="getTotalWinner"
      :totalLose="getTotalLose"
    ></Left>
    <Middle
      v-if="menu == 'home'"
      :teams="teams"
      :profileTeam="profileTeam"
    ></Middle>
    <History
      v-if="menu == 'history'"
      :profileTeam="profileTeam"
      :histories="histories"
    ></History>
    <Right></Right>
  </div>
</template>

<script>
import axios from "axios";
import Left from "./leftContentTeam.vue";
import Middle from "./midContentTeam.vue";
import Right from "./rightContentTeam.vue";
import Weather from "./weather.vue";
import History from "./history.vue";
export default {
  name: "MainContent",
  data() {
    return {
      weathers: [],
      profileTeam: {},
      histories: [],
      teams: [],
    };
  },
  components: {
    Left,
    Middle,
    Right,
    Weather,
    History,
  },
  props: ["account", "menu"],
  computed: {
    getTotalWinner() {
      let winner = this.histories.filter((el) => {
        if (el.theWinnerId == this.profileTeam.id) {
          return el;
        }
      });
      if (winner[0]) {
        console.log(winner, "<<<<");
        return winner.length;
      } else {
        console.log(winner, "<<<<");
        return 0;
      }
    },
    getTotalLose() {
      let lose = this.histories.filter((el) => {
        if (el.theWinnerId != this.profileTeam.id) {
          return el;
        }
      });
      if (lose[0]) {
        return lose.length;
      } else {
        return 0;
      }
    },
    getTotalmatch() {
      return this.histories.length;
    },
    getWeaterText() {
      this.weathers = this.weathers.map((el) => {
        return `Sekitar Jam ${el.jamCuaca.split(" ")[1]} kondisi ${el.cuaca}`;
      });
      this.weathers = this.weathers.join(", ");
      //   console.log(this.weathers);
      return this.weathers;
    },
  },
  methods: {
    getWeather() {
      axios({
        method: "GET",
        url: "http://localhost:4000/weather/501217",
      })
        .then(({ data }) => {
          this.weathers = data.news;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTeams() {
      axios({
        method: "GET",
        url: "http://localhost:4000/teams",
      })
        .then(({ data }) => {
          console.log(data);
          this.teams = data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProfile() {
      axios({
        method: "GET",
        url: `http://localhost:4000/teams/${this.account.teamId}`,
      })
        .then(({ data }) => {
          // console.log(data.result);
          this.profileTeam = data.result;
          this.getHistories();
        })
        .catch((err) => console.log(err));
    },
    getHistories() {
      axios({
        method: "GET",
        url: `http://localhost:4000/teams/histories/${this.account.teamId}`,
      })
        .then(({ data }) => {
          this.histories = data.result;
          console.log(data);
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.getWeather();
    this.getProfile();
    this.getHistories();
    this.getTeams();
  },
};
</script>

<style>
</style>