<template>
  <div class="mb-10">
    <Navbar></Navbar>
    <MainContent></MainContent>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import MainContent from "../components/team/mainContent.vue";
export default {
  name: "team",
  components: {
    Navbar,
    MainContent,
  },
};
</script>

<style>
</style>