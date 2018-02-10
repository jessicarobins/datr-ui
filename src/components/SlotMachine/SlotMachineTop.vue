<template>
  <div class="slot-machine-top">
    <div class="header-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SlotMachineTop'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/variables';

$border-radius: 90px;

.slot-machine-top {
  flex-shrink: 0;
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
  padding: $silver-width $silver-width 0;
  background: $silver-background;
  border: $silver-border-outset;
  border-bottom: 0;

  .header-container {
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: $silver-border;
    background: linear-gradient(
      90deg,
      $primary 0%,
      $primary-lighten-3 80%,
      $primary 100%
    );
    padding: 10px;
  }
}

@media (max-width: $tablet-breakpoint) {
  .slot-machine-top {
    padding: $silver-width-mobile $silver-width-mobile 0;
  }
}
</style>
