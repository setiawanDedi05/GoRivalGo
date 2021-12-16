<template>
  <div>
    <Navbar
      class="bg-white"
      :account="account"
      @logout="logout"
      @history="history"
      @home="home"
      :menu="menu"
    ></Navbar>
    <MainContent :account="account" :menu="menu"></MainContent>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../component/navbarteam.vue";
import Footer from "../component/footer.vue";
import MainContent from "../component/mainContent.vue";
export default {
  name: "team",
  components: {
    Navbar,
    Footer,
    MainContent,
  },
  data() {
    return {
      menu: "home",
    };
  },
  props: ["account"],
  methods: {
    history() {
      this.menu = "history";
    },
    home() {
      this.menu = "home";
    },
    logout() {
      this.$emit("logout", this.account.teamId);
    },
  },
};
</script>

<style>
</style>