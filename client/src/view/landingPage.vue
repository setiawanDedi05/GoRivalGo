<template>
  <div>
    <Navbar class="bg-white" :page="page" @goto="goto"></Navbar>
    <Landing v-if="page == 'landing'"></Landing>
    <Landing2 v-if="page == 'landing'" :page="page"></Landing2>
    <Login
      v-if="page == 'login'"
      :account="account"
      :login="login"
      @successLogin="successLogin"
    ></Login>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../component/navbar.vue";
import Landing from "../component/landing.vue";
import Landing2 from "../component/landing2.vue";
import Login from "../component/login.vue";
import Footer from "../component/footer.vue";
export default {
  name: "landingPage",
  components: {
    Navbar,
    Landing,
    Landing2,
    Footer,
    Login,
  },
  props: ["page", "account", "login"],
  methods: {
    goto(page) {
      this.page = page;
    },
    successLogin(account) {
      this.account = account;
      this.$emit("successLogin", account);
    },
  },
};
</script>

<style>
</style>