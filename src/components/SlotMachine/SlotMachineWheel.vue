<template>
  <div class="wheel-container">
    <div class="wheel">
      <div>
        <SlotMachineWheelItem :item="prevItem" />
      </div>
      <div>
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
    styles: Object
  },
  created() {
    this.animatedIndex = this.index
  },
  data() {
    return {
      animatedIndex: 0
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
  watch: {
    index(newValue, oldValue) {
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }

      const value = { tweeningNumber: oldValue }
      new TWEEN.Tween(value)
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 2000)
        .onUpdate(() => {
          this.animatedIndex = (value.tweeningNumber.toFixed(0) % this.items.length)
        })
        .start()

      animate()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wheel {
  align-items: center;
  background: #fff;
  width: 90%;
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 40px;
  justify-content: space-between;
}

.wheel-container {
  border-color: #BDBDBD;
  border-style: solid;
  border-right-width: 4px;
  border-left-width: 4px;
  flex: 1;
  height: 100%;
}

.wheel-container:first-child {
  border-left-width: 0;
}

.wheel-container:last-child {
  border-right-width: 0;
}

</style>
