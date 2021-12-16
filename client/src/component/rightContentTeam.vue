<template>
  <div class="m-2">
    <div class="text-center mt-5 text-2xl">News</div>
    <News
      v-for="berita in getFiveNews"
      :key="berita.id"
      :berita="berita"
    ></News>
  </div>
</template>

<script>
import axios from "axios";
import News from "./news.vue";
export default {
  name: "RightContent",
  data() {
    return {
      news: [],
    };
  },
  components: {
    News,
  },
  computed: {
    getFiveNews() {
      return this.news.filter((el, index) => {
        if (index < 5) {
          return el;
        }
      });
    },
  },
  methods: {
    getNews() {
      axios({
        method: "GET",
        url: "http://localhost:4000/news",
      })
        .then(({ data }) => {
          this.news = data.news.response;
          console.log(this.news);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getNews();
  },
};
</script>

<style>
</style>