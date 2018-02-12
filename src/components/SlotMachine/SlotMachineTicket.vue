<template>
  <div class="slot-machine-ticket-container">
    <div class="ticket-slot">
    </div>
    <div class="message">
      <v-icon>arrow_upward</v-icon>
      <span>collect ticket</span>
      <v-icon>arrow_upward</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlotMachineTicket'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/variables';

.slot-machine-ticket-container {
  height: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
}

.ticket-slot {
  background-color: $gray-darken-3;
  border: $dark-border;
  border-radius: 10px;
  flex: 1;
}

.message {
  display: flex;
  align-items: baseline;
  justify-content: center;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  margin-top: 5px;

  span, i {
    color: $gray-lighten-5;
    font-size: 24px;
    text-shadow: 1px 1px 2px $gray-darken-3;
  }

  @media (max-width: $tablet-breakpoint) {
    font-size: 3vw;
  }
}

</style>
