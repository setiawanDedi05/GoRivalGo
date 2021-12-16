<template>
  <div
    :class="
      isWinner == 'winner'
        ? 'flex flex-col items-center bg-blue-500 shadow-2xl m-2 p-2 rounded-xl'
        : 'flex flex-col items-center bg-blue-200 shadow-2xl m-2 p-2 rounded-xl'
    "
  >
    <p>
      <b>{{ history.teamA.name }}</b>
    </p>
    <div class="w-auto h-32">
      <img :src="history.teamA.imgUrl" />
    </div>
    <div
      :class="
        isWinner == 'winner'
          ? 'bg-blue-500 rounded-b-2xl w-full text-center'
          : 'bg-blue-200 rounded-b-2xl w-full text-center'
      "
    >
      <p>At {{ history.Gor.name }}</p>
      <p>{{ history.dateMatch }}</p>
      <p>{{ isWinner }}</p>
      <!-- <p>W {{ getTotalWinner }}, L {{ getTotalLose }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "historyCard",
  props: ["history", "profileTeam"],
  computed: {
    isWinner() {
      if (this.history.theWinnerId == this.profileTeam.id) return "winner";
      else return "lose";
    },
  },
};
</script>

<style>
</style>