<template>
  <div class="flex mt-10 grid grid-cols-5">
    <Left></Left>   
    <router-view></router-view>
    <Right></Right>
  </div>
</template>

<script>
import Left from "./leftContentTeam.vue";
import Right from "./rightContentTeam.vue";
export default {
  name: "MainContent",
  data() {
    return {
    };
  },
  components: {
    Left,
    Right
  },
  created() {
    const data = {
          token:localStorage.getItem('token'),
          gorId:localStorage.getItem('gorId'),
          teamId:localStorage.getItem('teamId'),
          username:localStorage.getItem('username'),
          role:localStorage.getItem('role')
        }
    this.$store.commit('SET_ACCOUNT', data)
    this.$store.dispatch('getInbox', localStorage.getItem('teamId'))
    this.$store.dispatch('getProfile', localStorage.getItem('teamId'))
    this.$store.dispatch('getHistories', localStorage.getItem('teamId'))
  }
};
</script>

<style>
</style>