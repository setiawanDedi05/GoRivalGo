<template>
  <div class="col-span-3 m-2 p-2 border-r-2 border-blue-100">
    <div class="mb-10 sh">
      <p>History</p>
      <div class="grid grid-cols-4 mt-2">
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
  props: ["histories", "profileTeam"],
  methods: {},
};
</script>

<style>
</style>