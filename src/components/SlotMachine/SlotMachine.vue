<template>
  <div class="slot-machine-container">
    <div class="slot-machine-top">
      <slot name="header"></slot>
    </div>
    <div class="slot-machine-outer-container">
      <SlotMachineMessage :message="message" />
      <div class="slot-machine-inner-container">
        <div class="slot-machine">
          <SlotMachineWheel
            v-for="n in numWheels"
            v-bind:key="n"
            :items="items[n - 1]"
            :index="indices[n - 1]"
            :spinning="spinning" />
        </div>
      </div>
      <slot name="footer"></slot>
      <div class="ring"></div>
      <button
        :disabled="disableButton"
        :class="handleClass"
        @click="toggle"></button>
    </div>
  </div>
</template>

<script>
import SlotMachineWheel from './SlotMachineWheel.vue'
import SlotMachineMessage from './SlotMachineMessage.vue'

export default {
  name: 'SlotMachine',
  components: {
    SlotMachineMessage,
    SlotMachineWheel
  },
  props: {
    canSpin: Boolean,
    getPlaces: Function,
    items: Array,
    placeItems: Array,
    resetItems: Function
  },
  data() {
    return {
      handleHalfDown: false,
      indices: [],
      message: 'insert zip code to play',
      spinning: false
    }
  },
  created() {
    for (let i = 0; i < this.numWheels; i += 1) {
      this.indices.push(this.random())
    }
  },
  computed: {
    disableButton() {
      return this.spinning
    },
    handleClass() {
      return {
        handle: true,
        down: this.spinning,
        'half-down': this.handleHalfDown
      }
    },
    numWheels() {
      return this.items.length
    }
  },
  methods: {
    random() {
      return Math.floor(Math.random() * Math.floor(this.items.length))
    },
    randomLarge(prevValue) {
      return this.random() + prevValue + (3 * this.items.length)
    },
    spin() {
      this.newIndices = []
      for (let i = 0; i < this.numWheels; i += 1) {
        this.newIndices.push(this.randomLarge(this.indices[i]))
      }

      this.indices = this.newIndices
    },
    toggle() {
      if (this.canSpin) {
        this.makePlaceRequest()
      } else {
        this.message = 'out of credits. insert zip code to play.'
        this.handleHalfDown = true
        setTimeout(() => {
          this.handleHalfDown = false
        }, 1500)
      }
    },
    makePlaceRequest() {
      this.spinning = true
      this.message = '...'
      this.resetItems()
      this.spin()
      this.getPlaces()
        .then(() => {
          this.spinning = false
          const newIndices = []
          for (let i = 0; i < this.numWheels; i += 1) {
            this.items[i].splice(1, 0, this.placeItems[i])
            newIndices.push(1)
          }

          this.indices = newIndices
          setTimeout(() => {
            this.message = 'jackpot!'
          }, 2000)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$height: 95vh;
$bg-color: rgba(64, 64, 64, 1);

.slot-machine-container {
  width: 80vw;
  height: $height;
  display: flex;
  flex-direction: column;
}

.slot-machine-top {
  background: #448AFF;
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
  flex-shrink: 0;
  padding: 20px 40px 0;
}

.slot-machine-outer-container {
  background: #448AFF;
  display: inline-flex;
  flex: 1;
  flex-direction: column;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  max-width: 1000px;
  min-width: 700px;
  padding: 10px 40px 20px;
  position: relative;
  width: 100%;
}

.slot-machine-inner-container {
  background-color: #404040;
  border: 30px inset #1976D2;
  border-radius: 20px;
  flex: 1;
  overflow: hidden;
}

.slot-machine {
  background: $bg-color;
  border: 5px solid #404040;
  border-top: 0;
  border-bottom: 0;
  border-radius: 10px;
  display: flex;
  height: 100%;
  min-width: 350px;
  overflow:  hidden;
  position: relative;
}

.slot-machine:before {
  content: '';
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    #{$bg-color} 0%,
    rgba(64,64,64,0) 15%,
    rgba(64,64,64,0) 85%,
    #{$bg-color} 100%
  );
}

.slot-machine:after {
  position: absolute;
  content: '';
  display: block;
  height: 45%;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  left: 0;
  background: rgba(41, 121, 255, .1);
}

.handle {
  position: absolute;
  height: 100%;
  right: -20px;
  bottom: 0;
  transform: translateY(-50%);
  transition: transform 0.2s ease;
}

.handle:before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 25px;
  height: 175px;
  background: linear-gradient(
    to right,
    #282828 0%,
    #959595 1%,
    #d1d1d1 30%,
    #bababa 60%,
    #959595 99%,
    #212121 100%
  );
  border-radius: 0 0 10px 0;
  transform-origin: bottom center;
  transition: all 0.2s ease;
}

.handle:after {
  content: "";
  position: absolute;
  bottom: 170px;
  left: -11px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(
    circle farthest-corner at 25% 25%,
    #90CAF9 0%,
    #0D47A1 100%
  );
  transform-origin: bottom center;
  transition: transform 0.2s ease;
}

.handle.down:before {
  transform: rotateX(180deg);
}

.handle.down:after {
  transform: translateY(350px)
}

.handle.half-down:before {
  transform: rotateX(45deg);
}

.handle.half-down:after {
  width: 55px;
  height: 55px;
  transform: translateY(70px)
}

.ring {
  background: #282828;
  background: linear-gradient(
    to bottom,
    #282828 0%,
    #959595 14%,
    #d1d1d1 37%,
    #bababa 49%,
    #959595 67%,
    #212121 100%
  );
  border-radius: 0 10px 10px 0;
  height: 50%;
  right: -20px;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform: translateY(50%);
  width: 20px;
}

</style>
