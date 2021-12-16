<template>
  <div class="col-span-3 m-2 p-2 border-r-2 border-blue-100">
    <div class="mb-10 sh">
      <p>Nearby Rival</p>
      <div class="grid grid-cols-4 mt-2">
        <Card v-for="team in getTeamsNearby" class="shadow-2xl p-2 rounded-lg m-2" :key="team.id" :team="team"></Card>
      </div>
    </div>
    <div class="mb-10">
      <p>Rival Online</p>
      <div class="grid grid-cols-4 mt-2">
        <Card v-for="team in getOnlineTeam" class="shadow-2xl p-2 rounded-lg " :key="team.id" :team="team"></Card>
      </div>
  </div>
</template>

<script>
import Card from "./teamCard.vue";
export default {
  name: "middle",
  props: ["teams", "profileTeam"],
  computed: {
    getTeamsNearby() {
      const teams = this.teams.filter(
        (el) => el.id != this.profileTeam.id && el.city == this.profileTeam.city
      );
      return teams;
    },
    getOnlineTeam() {
      const teams = this.teams.filter(
        (el) => el.id != this.profileTeam.id && el.isOnline == "true"
      );
      return teams;
    },
  },
  components: {
    Card,
  },
};
</script>

<style>
</style>