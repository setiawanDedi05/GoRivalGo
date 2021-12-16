<template>
  <div class="flex flex-col items-center">
    <p>
      <b>{{ team.name }}</b>
    </p>
    <div class="w-auto h-32">
      <img :src="team.imgUrl" />
    </div>
    <div class="bg-white w-full text-center">
      <p>Winrate {{ getWinrate }}%</p>
      <p>Total Match {{ getTotalmatch }}</p>
      <p>W {{ getTotalWinner }}, L {{ getTotalLose }}</p>
    </div>
    <button class="p-2 bg-blue-400 w-full text-white rounded-md">invite</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "card",
  data() {
    return {
      histories: [],
    };
  },
  props: ["team"],
  methods: {
    getHistories() {
      axios({
        method: "GET",
        url: `http://localhost:4000/teams/histories/${this.team.id}`,
      })
        .then(({ data }) => {
          this.histories = data.result;
          console.log(this.histories);
        })
        .catch((err) => console.log(err));
    },
  },
  computed: {
    getWinrate() {
      if (this.getTotalmatch) {
        let winrate = (this.getTotalWinner / this.getTotalmatch) * 100;
        console.log(winrate);
        return String(winrate).slice(0, 5);
      } else {
        return 0;
      }
    },
    getTotalWinner() {
      let winner = this.histories.filter((el) => {
        if (el.theWinnerId == this.team.id) {
          return el;
        }
      });
      if (winner[0]) {
        return winner.length;
      } else {
        return 0;
      }
    },
    getTotalLose() {
      let lose = this.histories.filter((el) => {
        if (el.theWinnerId !== this.team.id) {
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
  },
  created() {
    this.getHistories();
  },
};
</script>

<style>
</style>