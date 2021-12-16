<template>
  <div class="shadow-lg p-2 w-auto">
    <div class="mt-5 text-left">
      <p>
        <b>{{ berita.competition }}</b>
      </p>
      <p>
        <a :href="berita.matchviewUrl" target="_blank">{{ berita.title }}</a>
      </p>
    </div>
    <div class="flex justify-center items-center">
      <img class="w-32 rounded-sm" :src="berita.thumbnail" />
      <!-- <iframe
        frameborder="0"
        scrolling="no"
        style="width: 100%; height: 100%; border: none"
        :src="berita.matchviewUrl"
      ></iframe> -->
      <!-- {{ berita.videos[0].embed }} -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["berita"],
};
</script>

<style>
</style>