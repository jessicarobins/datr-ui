<template>
  <div class="wheel-container">
    <div class="wheel">
      <div>
        <SlotMachineWheelItem :item="prevItem" />
      </div>
      <div class="selected">
        <SlotMachineWheelItem :item="item" />
      </div>
      <div>
        <SlotMachineWheelItem :item="nextItem" />
      </div>
    </div>
  </div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'
import SlotMachineWheelItem from './SlotMachineWheelItem.vue'

export default {
  name: 'SlotMachineWheel',
  components: {
    SlotMachineWheelItem
  },
  props: {
    index: Number,
    items: Array,
    spinning: Boolean,
    styles: Object
  },
  created() {
    this.animatedIndex = this.index
  },
  data() {
    return {
      animatedIndex: 0,
      infiniteTween: null
    }
  },
  computed: {
    nextItem() {
      return this.items[(this.animatedIndex + 1) % this.items.length]
    },
    prevItem() {
      const index = (this.animatedIndex === 0) ?
        (this.items.length - 1) : (this.animatedIndex - 1)
      return this.items[index]
    },
    item() {
      return this.items[this.animatedIndex]
    }
  },
  methods: {
    runInfiniteTween(newValue, oldValue) {
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      const value = { tweeningNumber: oldValue }
      this.infiniteTween = new TWEEN.Tween(value)
        .to({ tweeningNumber: newValue }, 2000)
        .repeat(Infinity)
        .onUpdate(() => {
          this.animatedIndex = (value.tweeningNumber.toFixed(0) % this.items.length)
        })
        .start()

      animate()
    },
    runFinalTween(newValue, oldValue) {
      const value = { tweeningNumber: oldValue }

      new TWEEN.Tween(value)
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 2000)
        .onUpdate(() => {
          this.animatedIndex = (value.tweeningNumber.toFixed(0) % this.items.length)
        })
        .start()
    },
    stopInfiniteTween() {
      if (this.infiniteTween) {
        this.infiniteTween.stop()
      }
    }
  },
  watch: {
    index(newValue, oldValue) {
      if (this.spinning) {
        this.runInfiniteTween(newValue, oldValue)
      } else {
        this.runFinalTween(newValue, oldValue)
      }
    },
    spinning(newValue) {
      if (!newValue) {
        this.stopInfiniteTween()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/variables';

.wheel {
  align-items: center;
  background: #fff;
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  margin: 0 $wheel-margin;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: $tablet-breakpoint) {
    margin: 0 $wheel-margin-mobile;
  }
}

.wheel-container {
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

.selected {
  position: relative;
  z-index: 2;
}

</style>
