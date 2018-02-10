<template>
  <div class="slot-machine-wheel-container">
    <div class="slot-machine">
      <SlotMachineWheel
        v-for="n in numWheels"
        v-bind:key="n"
        :items="items[n - 1]"
        :index="indices[n - 1]"
        :spinning="spinning" />
    </div>
    <div class="bars"></div>
  </div>
</template>

<script>
import SlotMachineWheel from './SlotMachineWheel.vue'

export default {
  name: 'SlotMachineWheelContainer',
  components: {
    SlotMachineWheel
  },
  props: {
    indices: Array,
    items: Array,
    numWheels: Number,
    spinning: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/variables';
$bg-color: $gray-darken-4;
$inner-container-inset-width: 30px;
$inner-container-inset-width-mobile: 10px;

.bars {
  content: '';
  position: absolute;
  top: -$inner-container-inset-width;
  left: $wheel-margin;
  bottom: -$inner-container-inset-width;
  right: $wheel-margin;
  background:
    linear-gradient(
      90deg,
      transparent calc(33.3333% - #{$wheel-margin}),
      $gray-lighten-1 calc(33.3333% - #{$wheel-margin}),
      #fff 33.3333%,
      $gray-lighten-1 calc(33.3333% + 3px),
      transparent calc(33.3333% + 3px),
      transparent calc(66.66666% - 3px),
      $gray-lighten-1 calc(66.66666% - 3px),
      #fff 66.66666%,
      $gray-lighten-1 calc(66.66666% + #{$wheel-margin}),
      transparent calc(66.66666% + #{$wheel-margin}),
      transparent 100%
    );

  @media (max-width: $tablet-breakpoint) {
    top: -$inner-container-inset-width-mobile;
    left: $wheel-margin-mobile;
    bottom: -$inner-container-inset-width-mobile;
    right: $wheel-margin-mobile;
    background:
      linear-gradient(
        90deg,
        transparent calc(33.3333% - #{$wheel-margin-mobile}),
        $gray-lighten-1 calc(33.3333% - #{$wheel-margin-mobile}),
        #fff 33.3333%,
        $gray-lighten-1 calc(33.3333% + 3px),
        transparent calc(33.3333% + 3px),
        transparent calc(66.66666% - 3px),
        $gray-lighten-1 calc(66.66666% - 3px),
        #fff 66.66666%,
        $gray-lighten-1 calc(66.66666% + #{$wheel-margin-mobile}),
        transparent calc(66.66666% + #{$wheel-margin-mobile}),
        transparent 100%
      );
  }
}

.slot-machine-wheel-container {
  background-color: $gray-darken-4;
  border: $inner-container-inset-width inset $gray-lighten-1;
  border-radius: 20px;
  flex: 1;
  position: relative;
}

@media (max-width: $tablet-breakpoint) {
  .slot-machine-wheel-container {
    border-width: $inner-container-inset-width-mobile;
  }
}

.slot-machine {
  background: $bg-color;
  border-radius: 10px;
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      #{$bg-color} 0%,
      #{rgba($bg-color, 0)} 15%,
      #{rgba($bg-color, 0)} 85%,
      #{$bg-color} 100%
    );
  }

  &:after {
    position: absolute;
    content: '';
    display: block;
    height: 45%;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    left: 0;
    background: rgba($primary, .1);
  }
}
</style>
