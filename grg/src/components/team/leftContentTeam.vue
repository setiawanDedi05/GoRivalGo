<template>
<div class='ml-5 my-6'>
  <div class="min-h-screen flex justify-center items-center">
  <div class="p-6 bg-white rounded-xl shadow-xl ">
    <img class="w-64 object-cover rounded-t-md" :src="profileTeam.imgUrl" />
    <div class="mt-4">
      <h1 class="text-2xl font-bold text-gray-700">{{profileTeam.name}}</h1>
      <p class="text-sm mt-2 text-gray-700">{{profileTeam.city}}</p>
      <p class="text-sm mt-2 text-gray-700">Winrate : {{winrate}}%</p>
      <p class="text-sm mt-2 text-gray-700">Total Match : {{getTotalMatch}}</p>
      <p class="text-sm mt-2 text-gray-700">W : {{getTotalWinner}}</p>
      <p class="text-sm mt-2 text-gray-700">L : {{getTotalLose}}</p>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "leftContent",
  computed: {
    profileTeam(){
      return this.$store.state.profileTeam
    },
    histories(){
      return this.$store.state.histories
    },
    getTotalWinner() {
      let winner = this.histories.filter((el) => {
        if (el.theWinnerId == this.profileTeam.id && el.status == 'finish') {
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
        if (el.theWinnerId != this.profileTeam.id && el.status == 'finish') {
          return el;
        }
      });
      if (lose[0]) {
        console.log('lose', lose);
        return lose.length;
      } else {
        return 0;
      }
    },
    getTotalMatch() {
      console.log(this.histories.length); 
      let match = this.histories.filter((el) => {
        if (el.status == 'finish') {
          return el;
        }
      });
      if (match[0]) {
        return match.length;
      } else {
        return 0;
      }
    },
    winrate() {
      if (this.getTotalMatch) {
        let winrate = (this.getTotalWinner / this.getTotalMatch) * 100;
        console.log(winrate, "ini left");
        return String(winrate).slice(0, 5);
      } else {
        return 0;
      }
    },
  },
  methods: {
    getProfile() {
      this.$store.dispatch('getProfile', localStorage.getItem('teamId'))
    },
    getHistories() {
      this.$store.dispatch('getHistories', localStorage.getItem('teamId'))
    }
  },
  created() {
    this.getProfile();
    this.getHistories()
  }
};
</script>

<style>
</style>