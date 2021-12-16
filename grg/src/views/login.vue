<template>
<div>
  <Navbar></Navbar>
  <div
    class="
      container mb-40 mt-10
      flex flex-1
      justify-center
      items-center
      mt-15
    "
  >
    <div class="w-full max-w-lg">
      <div class="leading-loose">
        <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl" @submit.prevent="login">
          <p class="text-gray-800 font-medium text-center text-lg font-bold">
            Sign In
          </p>
          <div class="">
            <label class="block text-sm text-gray-00" for="username"
              >Username</label
            >
            <input
              class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="username"
              name="username"
              type="text"
              required=""
              placeholder="User Name"
              aria-label="username"
              v-model="username"
            />
          </div>
          <div class="mt-2">
            <label class="block text-sm text-gray-600" for="password"
              >Password</label
            >
            <input
              class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="password"
              name="password"
              type="password"
              required=""
              placeholder="type your password"
              aria-label="password"
              v-model="password"
            />
          </div>
          <div class="mt-4 items-center justify-between">
            <button
              class="
                px-4
                py-1
                text-white
                font-light
                tracking-wider
                bg-gray-900
                rounded
              "
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/navbar.vue'
export default {
  name: "LoginForm",
  data () {
      return {
          username: '',
          password: ''
      }
  },
  components: {
    Navbar
  },
  methods: {
      login(){
          this.$store.dispatch('login', {username: this.username, password: this.password})
      }
  }
};
</script>

<style>
</style>