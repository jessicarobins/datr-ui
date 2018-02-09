<template>
  <div class="home">
    <Places />
  </div>
</template>

<script>
import Places from '@/components/Places.vue'

export default {
  name: 'home',
  components: {
    Places
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}
</style>
