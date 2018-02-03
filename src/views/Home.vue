<template>
  <div class="home">
    <img src="../assets/logo.png">
    <Place type="activity" />
    <Place type="food" />
  </div>
</template>

<script>
import Place from '@/components/Place.vue'

export default {
  name: 'home',
  components: {
    Place
  }
}
</script>
