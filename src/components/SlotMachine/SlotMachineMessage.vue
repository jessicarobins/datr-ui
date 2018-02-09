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
<style scoped>
.slot-machine-message {
  background-color: #424242;
  border: 3px inset #616161;
  border-radius: 10px;
  color: #FFF9C4;
  font-family: 'Orbitron', sans-serif;
  font-size: 25px;
  height: 50px;
  line-height: 50px;
  margin-bottom: 10px;
  text-align: center;
  text-shadow: 1px 1px 2px black;;
  text-transform: uppercase;
}
</style>
