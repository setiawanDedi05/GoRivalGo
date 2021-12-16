<template>
  <div class="m-2">
    <div class="text-center mt-5 text-2xl">News</div>
    <News
      v-for="news in getFiveNews"
      :key="news.id"
      :berita="news"
    ></News>
  </div>
</template>

<script>
import News from "./news.vue";
export default {
  name: "RightContent",
  components: {
    News,
  },
  computed: {
    getFiveNews() {
      return this.$store.state.news.filter((el, index) => {
        if (index < 5) {
          return el;
        }
      });
    },
  },
  methods: {
    getNews() {
      this.$store.dispatch('getNews')
    },
  },
  created() {
    this.getNews();
  },
};
</script>

<style>
</style>