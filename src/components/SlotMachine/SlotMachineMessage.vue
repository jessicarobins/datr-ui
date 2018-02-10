<template>
  <div class="slot-machine-message">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'SlotMachineMessage',
  props: {
    message: String
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
  font-family: 'Orbitron', sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
  padding: 3px;
  text-align: center;
  text-shadow: 1px 1px 2px black;
  text-transform: uppercase;

  @media (max-width: $tablet-breakpoint) {
    font-size: 3vw;
  }
}


</style>
