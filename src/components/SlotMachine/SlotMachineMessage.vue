<template>
  <div class="slot-machine-message accent-font">
    {{ message }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SlotMachineMessage',
  computed: {
    ...mapState({
      message: state => state.message.text
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/variables';

.slot-machine-message {
  background-color: $gray-darken-3;
  border: $dark-border;
  border-radius: 10px;
  color: $accent-lighten-4;
  font-size: 24px;
  margin-bottom: 10px;
  padding: 3px;
  text-align: center;
  text-shadow: 1px 1px 2px black;

  @media (max-width: $tablet-breakpoint) {
    font-size: 3vw;
  }
}


</style>
