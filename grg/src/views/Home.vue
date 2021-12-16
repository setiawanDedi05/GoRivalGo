<template>
<div>
  <Navbar></Navbar>
  <Landing></Landing>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/navbar.vue'
import Landing from './landingPage.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Landing
  }
}
</script>

