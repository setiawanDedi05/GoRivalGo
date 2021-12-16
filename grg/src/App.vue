<template>
  <div id="app">
    <router-view/>
    <HFooter></HFooter>
  </div>
</template>

<script>

import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'app',
  components: {
    HFooter
  }
}
</script>

<style>

</style>
