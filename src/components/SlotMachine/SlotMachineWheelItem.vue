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
<style scoped lang="scss">
@import '../../styles/variables';

i {
  font-size: 10vw;
}

@media (min-width: $tablet-breakpoint) {
  i {
     font-size: 64px;
  }
}
</style>
