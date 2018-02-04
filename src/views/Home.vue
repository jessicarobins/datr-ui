<template>
  <div class="home">
    <Place type="food" step="1" />
    <Place type="activity" step="2" />
    <Place type="night" step="3" />
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
