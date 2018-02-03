<template>
  <div class="home">
    <img src="../assets/logo.png">
    <Activity />
  </div>
</template>

<script>
import Activity from '@/components/Activity.vue'

export default {
  name: 'home',
  components: {
    Activity
  }
}
</script>
