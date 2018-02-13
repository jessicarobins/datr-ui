<template>
  <div class="footer-container">
    <div class="footer-left">
    </div>
    <div class="footer-center">
      <SlotMachineTicketContainer :has-jackpot="hasJackpot" />
    </div>
    <div class="footer-right">
      <slot></slot>
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
  background: linear-gradient(
    90deg,
    $primary-darken-3 0%,
    $primary-darken-1 80%,
    $primary-darken-3 100%
  );
  display: flex;
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
    flex-direction: column-reverse;
  }
}

.footer-left,
.footer-right {
  flex: .25;
}

.footer-right {
  display: flex;
  justify-content: flex-end;
}

.footer-center {
  flex: .5;
}

</style>
