<template>
  <div class="footer-container">
    <div class="footer-left">
      <slot name="footer-left"></slot>
    </div>
    <div class="footer-center">
      <SlotMachineTicketContainer :has-jackpot="hasJackpot" />
    </div>
    <div class="footer-right">
      <slot name="footer-right" class="footer-right"></slot>
    </div>
  </div>
</template>

<script>
import SlotMachineTicketContainer from './SlotMachineTicketContainer.vue'

export default {
  name: 'SlotMachineBottom',
  components: {
    SlotMachineTicketContainer
  },
  props: {
    hasJackpot: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/variables';

.footer-container {
  align-items: center;
  background: linear-gradient(
    90deg,
    $primary-darken-3 0%,
    $primary-darken-1 80%,
    $primary-darken-3 100%
  );
  display: grid;
  grid-gap: 10px 10px;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: flex-end;
  padding: 0 20px 20px;
  border-radius: 5px;
  width: calc(100% + 30px);
  align-self: center;
  position: relative;
  margin-top: 18px;

  &:after {
    content: '';
    position: absolute;
    top: -32px;
    left: 0;
    right: 0;
    border: 14px solid transparent;
    border-bottom: 20px solid $primary-darken-3;
    z-index: 0;
  }

  @media (max-width: $tablet-breakpoint) {
    grid-template-columns: 1fr 1fr;

    .footer-left {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
    }

    .footer-right {
      grid-column: 2 / span 1;
      grid-row: 1 / span 1;
    }

    .footer-center {
      grid-column: 1 / span 2;
      grid-row: 2 / span 1;
    }
  }
}

.footer-left {
  grid-column: 1 / span 1;
}

.footer-right {
  grid-column: 3 / span 1;
  display: flex;
  justify-content: center;
}

</style>
