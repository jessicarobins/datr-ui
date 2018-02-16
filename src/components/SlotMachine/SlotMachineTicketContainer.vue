<template>
  <div class="slot-machine-ticket-container">
    <button :class="ticketClass" @click="toggleTicket" :disabled="!hasJackpot">
      <div class="ticket"></div>
    </button>
    <div class="message">
      <v-icon>arrow_upward</v-icon>
      <span>collect ticket</span>
      <v-icon>arrow_upward</v-icon>
    </div>
    <SlotMachineTicket
      v-if="ticketOpen"
      :open="ticketOpen"
      :toggle="toggleTicket" />
  </div>
</template>

<script>
import SlotMachineTicket from './SlotMachineTicket.vue'

export default {
  name: 'SlotMachineTicketContainer',
  components: {
    SlotMachineTicket
  },
  props: {
    hasJackpot: Boolean
  },
  data() {
    return {
      ticketOpen: false
    }
  },
  computed: {
    ticketClass() {
      return {
        'ticket-slot': true,
        down: this.hasJackpot
      }
    }
  },
  methods: {
    toggleTicket() {
      this.ticketOpen = !this.ticketOpen
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/variables';

.slot-machine-ticket-container {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
}

.ticket-slot {
  background-color: $gray-darken-3;
  border: $dark-border;
  border-radius: 10px;
  flex: 1;
  height: 55px;
  position: relative;
  overflow: hidden;

  &.down {
    animation: $pulse-animation;
    cursor: pointer;
    z-index: 1;

    .ticket {
      transform: translateY(50px);
    }
  }

  .ticket {
    border: 28px solid transparent;
    border-bottom: 20px solid white;
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    transition: transform 0.2s ease;
  }
}

@media (max-width: $tablet-breakpoint) {
  .ticket-slot {
    align-self: center;
    height: 20px;
    max-width: 275px;
    width: 100%;

    .ticket {
      top: -85px;
    }
  }
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

    @media (max-width: $tablet-breakpoint) {
      font-size: 16px;
    }
  }
}

</style>
