<template>
  <div class="col-span-3 m-5 p-2 border-r-2 border-blue-100 border-l-2 border-blue-100">
    <div class="mb-10 ml-5">
      <p class="ml-5">History</p>
      <div class="grid grid-cols-4 m-2">
        <HistoryCard
          v-for="history in histories"
          :key="history.id"
          :history="history"
          :profileTeam="profileTeam"
        ></HistoryCard>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryCard from "./historyCard.vue";
export default {
  name: "history",
  components: {
    HistoryCard,
  },
  computed: {
    histories(){
      const histories = this.$store.state.histories.filter(el => el.status == 'finish') 
      return histories
    },
    profileTeam(){
      return this.$store.state.profileTeam
    }
  },
  created(){
    this.$store.dispatch('getHistories', localStorage.getItem('teamId'))
  }
};
</script>

<style>
</style>