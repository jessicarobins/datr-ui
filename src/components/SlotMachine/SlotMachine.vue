<template>
  <div>
    <div class="slot-machine-outer-container">
      <h1>datemachine</h1>
      <div class="slot-machine-inner-container">
        <div class="slot-machine">
          <SlotMachineWheel
            v-for="n in numWheels"
            v-bind:key="n"
            :items="items[n - 1]"
            :index="indices[n - 1]" />
        </div>
      </div>
      <div class="ring"></div>
      <button v-bind:class="handleClass" @click="toggle"></button>
    </div>
  </div>
</template>

<script>
import SlotMachineWheel from './SlotMachineWheel.vue'

export default {
  name: 'SlotMachine',
  components: {
    SlotMachineWheel
  },
  props: {
    getPlaces: Function,
    items: Array,
    placeItems: Array
  },
  data() {
    return {
      handleDown: false,
      indices: []
    }
  },
  created() {
    for (let i = 0; i < this.numWheels; i += 1) {
      this.indices.push(this.random())
    }
  },
  computed: {
    handleClass() {
      return {
        handle: true,
        down: this.handleDown
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
      this.handleDown = true
      this.spin()
      this.getPlaces()
        .then(() => {
          this.handleDown = false
          this.items[0].splice(this.indices[0], 0, this.placeItems[0])
          this.items[1].splice(this.indices[1], 0, this.placeItems[1])
          this.items[2].splice(this.indices[2], 0, this.placeItems[2])
          const newIndices = [
            this.indices[0] + 1,
            this.indices[1] + 1,
            this.indices[2] + 1
          ]

          this.indices = newIndices
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$height: 70vh;
$bg-color: rgba(64, 64, 64, 1);

.slot-machine-outer-container {
  background: #448AFF;
  display: inline-block;
  border-radius: 20px;
  padding: 50px 40px 20px;
  position: relative;
}

.slot-machine-inner-container {
  background-color: #1565C0;
  border-radius: 20px;
  padding: 40px 25px 10px;
}

.slot-machine {
  background: $bg-color;
  border: 5px solid #404040;
  border-top: 0;
  border-bottom: 0;
  border-radius: 10px;
  display: flex;
  height: $height;
  min-width: 350px;
  position: relative;
  width: calc(#{$height} * 8 / 5);
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
  height: calc(#{$height} / 3);
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
  width: 20px;
  height: 60px;
  background: linear-gradient(to right, #bbb 0%, #eee 30%, #bbb 100%);
  border-radius: 0 0 10px 0;
  transform-origin: bottom center;
  transition: transform 0.2s ease;
}

.handle:after {
  content: "";
  position: absolute;
  bottom: 55px;
  left: -5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(circle farthest-corner at 25% 25%, LightSalmon 0%, tomato 100%);
  transform-origin: bottom center;
  transition: transform 0.2s ease;
}

.handle.down:before {
  transform: rotateX(180deg);
}

.handle.down:after {
  transform: translateY(140px)
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
