<template>
  <div
    class="
      container
      mx-auto
      h-full
      flex flex-1
      justify-center
      items-center
      pt-24
    "
  >
    <div class="w-full max-w-lg">
      <div class="leading-loose">
        <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
          <p class="text-gray-800 font-medium text-center text-lg font-bold">
            Login
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
              v-model="login.username"
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
              v-model="login.password"
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
              @click.prevent="proccessLogin"
            >
              Sign In
            </button>
            <a
              class="
                inline-block
                right-0
                align-baseline
                font-bold
                text-sm text-500
                hover:text-blue-800
              "
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginForm",
  props: ["login", "account"],
  methods: {
    proccessLogin() {
      axios({
        method: "POST",
        url: "http://localhost:4000/players/signin",
        data: {
          username: this.login.username,
          password: this.login.password,
        },
      })
        .then(({ data }) => {
          console.log(data);
          this.account = data;
          localStorage.setItem("token", this.account.token);
          localStorage.setItem("teamId", this.account.teamId);
          localStorage.setItem("gorId", this.account.gorId);
          localStorage.setItem("id", this.account.id);
          localStorage.setItem("role", this.account.role);
          this.$emit("successLogin", this.account);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>