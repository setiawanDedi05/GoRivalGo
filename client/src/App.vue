<template>
  <div>
    <Landingpage
      v-if="!account.token"
      :page="page"
      :account="account"
      :login="login"
      @successLogin="successLogin"
    ></Landingpage>
    <Team v-if="account.token" :account="account" @logout="logout"></Team>
  </div>
</template>

<script>
import axios from "axios";
import Landingpage from "./view/landingPage.vue";
import Team from "./view/team.vue";
export default {
  name: "App",
  components: {
    Landingpage,
    Team,
  },
  data() {
    return {
      page: "landing",
      login: {
        username: "",
        password: "",
      },
      account: {
        token: localStorage.getItem("token") || "",
        username: localStorage.getItem("username") || "",
        role: localStorage.getItem("role") || "",
        id: localStorage.getItem("id") || "",
        teamId: localStorage.getItem("teamId") || "",
        gorId: localStorage.getItem("gorId") || "",
      },
    };
  },
  methods: {
    successLogin(account) {
      this.account = account;
      this.page = "main";
      this.manu = "home";
    },
    clearState() {
      this.account = {
        token: "",
        username: "",
        role: "",
        id: "",
        teamId: "",
        gorId: "",
      };
      this.login = {
        username: "",
        password: "",
      };
    },
    logout(id) {
      axios({
        method: "PATCH",
        url: `http://localhost:4000/players/signout/${id}`,
      })
        .then((result) => {
          localStorage.removeItem("token");
          localStorage.removeItem("id");
          localStorage.removeItem("role");
          localStorage.removeItem("teamId");
          localStorage.removeItem("gorId");
          this.page = "landing";
          this.clearState();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>