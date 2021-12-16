<template>
  <div class="m-2 flex flex-col items-center border-r-2 border-blue-100">
    <div class="text-center mt-5">{{ profileTeam.name }}</div>
    <div class="p-5">
      <img
        class="w-md rounded-full w-32 shadow-2xl"
        :src="profileTeam.imgUrl"
      />
    </div>
    <div class="">
      <p>
        <b class="text-xl">Winrate {{ winrate }}%</b>
      </p>
      <p>total match {{ totalMatch }}x</p>
      <p>Menang {{ totalWin }}x</p>
      <p>Kalah {{ totalLose }}x</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftContent",
  props: ["profileTeam", "totalMatch", "totalWin", "totalLose"],
  methods: {},
  computed: {
    winrate() {
      let winrate = (this.totalWin / this.totalMatch) * 100;
      return String(winrate).slice(0, 5);
    },
  },
};
</script>

<style>
</style>