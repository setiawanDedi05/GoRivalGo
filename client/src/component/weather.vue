<template>
  <p>
    {{ cuaca.cuaca }}
    {{ cuaca.jamCuaca }}
  </p>
</template>

<script>
export default {
  props: ["cuaca"],
  computed: {
    imgWeather() {
      return `https://ibnux.github.io/BMKG-importer/icon/${this.cuaca.kodeCuaca}.png`;
    },
    dateWeather() {
      return this.cuaca.jamCuaca.split(" ")[0];
    },
  },
};
</script>

<style>
</style>