<template>
  <div>
    <v-icon v-if="isIcon"> {{ item }}</v-icon>
    <Place v-else :place="item" />
  </div>
</template>

<script>
import Place from '../Place.vue'

export default {
  name: 'SlotMachineWheel',
  props: ['item'],
  components: {
    Place
  },
  computed: {
    isIcon() {
      return (typeof this.item === 'string')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
i {
  font-size: 10vh;
}
</style>
