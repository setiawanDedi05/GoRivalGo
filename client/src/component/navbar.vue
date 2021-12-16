<template>
  <!--Nav-->
  <nav id="header" class="fixed w-full z-30 top-0 text-blue-400">
    <div
      class="
        w-full
        container
        mx-auto
        flex flex-wrap
        items-center
        justify-between
        mt-0
        py-2
      "
    >
      <div class="pl-4 flex items-center">
        <!--Icon from: http://www.potlabicons.com/ -->
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          class="float-left"
          fill="none"
        >
          <circle
            cx="12.735"
            cy="12"
            r="7"
            stroke="#0A0A30"
            stroke-width="1.5"
          />
          <circle cx="9.735" cy="10.277" r="1" fill="#0A0A30" />
          <circle cx="15.735" cy="10.277" r="1" fill="#0A0A30" />
          <path
            stroke="#265BFF"
            stroke-linecap="round"
            d="M15.735 14.147l-.049.04a4.631 4.631 0 01-5.951-.04"
            style="animation: happy 3s infinite linear"
            stroke-dasharray="100"
          />
        </svg>
        <a
          class="
            toggleColour
            text-blue-400
            no-underline
            hover:no-underline
            font-bold
            text-l
            lg:text-2xl
          "
          href="#"
        >
          Go Rival Go
        </a>
      </div>
      <div class="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          class="
            flex
            items-center
            p-1
            text-blue-400
            hover:text-gray-900
            focus:outline-none focus:shadow-outline
            transform
            transition
            hover:scale-105
            duration-300
            ease-in-out
          "
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="
          w-full
          flex-grow
          lg:flex lg:items-center lg:w-auto
          hidden
          mt-2
          lg:mt-0
          bg-white
          lg:bg-transparent
          text-black
          p-4
          lg:p-0
          z-20
        "
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <!-- <li class="mr-3" v-if="page != 'signup'">
            <a
              class="
                inline-block
                text-black
                no-underline
                hover:text-gray-800 hover:text-underline
                py-2
                px-4
              "
              >Sign Up</a
            >
          </li> -->
          <li class="mr-3" v-if="page != 'login'">
            <button
              class="
                inline-block
                text-black
                no-underline
                hover:text-gray-800 hover:text-underline
                py-2
                px-4
              "
              @click.prevent="$emit('goto', 'login')"
            >
              Sign In
            </button>
          </li>
        </ul>
        <button
          id="navAction"
          class="
            mx-auto
            lg:mx-0
            hover:underline
            bg-blue-400
            text-white
            font-bold
            rounded-full
            mt-4
            lg:mt-0
            py-2
            px-2
            shadow
            opacity-75
            focus:outline-none focus:shadow-outline
            transform
            transition
            hover:scale-105
            duration-300
            ease-in-out
          "
          @click.prevent="$emit('goto', 'landing')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </button>
      </div>
    </div>
    <hr class="border-b border-blue-100 opacity-75 my-0 py-0" />
  </nav>
</template>

<script>
export default {
  name: "navbar",
  props: ["page"],
};
</script>

<style>
</style>