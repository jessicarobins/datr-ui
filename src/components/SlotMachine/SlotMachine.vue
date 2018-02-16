<template>
  <div class="slot-machine-container">
    <SlotMachineTop>
      <slot name="header"></slot>
    </SlotMachineTop>
    <div class="slot-machine-gradient-container">
      <SlotMachineMessage />
      <SlotMachineWheelContainer
        :num-wheels="numWheels"
        :items="items"
        :indices="indices"
        :spinning="spinning">
      </SlotMachineWheelContainer>
      <div class="ring"></div>
      <div
        :class="handleClass"
        @click="toggle"></div>
    </div>
    <SlotMachineBottom :has-jackpot="hasJackpot">
      <div slot="footer-left" class="button-container">
        <ActionButton
          class="hidden-sm-and-down"
          :on-click="toggle"
          :disabled="disableButton"
          label="spin" />
        <slot name="footer-left"></slot>
      </div>
      <slot name="footer-right" slot="footer-right"></slot>
    </SlotMachineBottom>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { SET_SYSTEM_MESSAGE } from '@/store/types'

import ActionButton from '../ActionButton.vue'
import SlotMachineMessage from './SlotMachineMessage.vue'
import SlotMachineTop from './SlotMachineTop.vue'
import SlotMachineBottom from './SlotMachineBottom.vue'
import SlotMachineWheelContainer from './SlotMachineWheelContainer.vue'

export default {
  name: 'SlotMachine',
  components: {
    ActionButton,
    SlotMachineBottom,
    SlotMachineMessage,
    SlotMachineTop,
    SlotMachineWheelContainer
  },
  props: {
    canSpin: Boolean,
    getPlaces: Function,
    items: Array,
    selectedItems: Function,
    resetItems: Function
  },
  data() {
    return {
      handleHalfDown: false,
      indices: [],
      spinning: false,
      hasJackpot: false
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
        'half-down': this.handleHalfDown,
        clickable: !this.disableButton
      }
    },
    numWheels() {
      return this.items.length
    }
  },
  methods: {
    ...mapMutations({
      setMessage: SET_SYSTEM_MESSAGE
    }),
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
      if (!this.disableButton) {
        if (this.canSpin) {
          this.makePlaceRequest()
        } else {
          this.setMessage('out of credits. insert zip code to play.')
          this.handleHalfDown = true
          setTimeout(() => {
            this.handleHalfDown = false
          }, 1500)
        }
      }
    },
    async makePlaceRequest() {
      this.hasJackpot = false
      this.spinning = true
      this.setMessage('...')
      this.resetItems()
      this.spin()
      await this.getPlaces()
      this.spinning = false
      if (this.selectedItems().length) {
        const newIndices = []
        for (let i = 0; i < this.numWheels; i += 1) {
          const r = this.random()
          this.items[i].splice(r, 0, this.selectedItems()[i])
          newIndices.push(r)
        }
        this.indices = newIndices
        setTimeout(() => {
          this.hasJackpot = true
          this.setMessage('jackpot! collect ticket')
        }, 2000)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/variables';

$height: 100vh;
$ring-width: 20px;
$ring-width-mobile: 10px;
$handle-width: 25px;
$handle-width-mobile: 15px;

.slot-machine-container {
  width: 80vw;
  height: $height;
  min-height: 655px;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  position: relative;

  @media (max-width: $tablet-breakpoint) {
    min-height: 590px;
  }
}

.slot-machine-gradient-container {
  background: $silver-background;
  border: $silver-border-outset;
  border-top: 0;
  display: inline-flex;
  flex: 1;
  flex-direction: column;
  padding: $silver-width;
  width: 100%;

  @media (max-width: $tablet-breakpoint) {
    padding: $silver-width-mobile;
  }
}

.button-container {
  display: flex;
  justify-content: center;
}

.handle {
  cursor: pointer;
  position: absolute;
  height: 100%;
  right: -20px;
  bottom: 0;
  transform: translateY(-50%);
  transition: transform 0.2s ease;

  @media (max-width: $tablet-breakpoint) {
    right: -10px;
  }
}

.handle:before {
  content: "";
  position: absolute;
  bottom: 0;
  width: $handle-width;
  height: 175px;
  background: linear-gradient(
    to right,
    $gray-darken-4 0%,
    $gray-darken-1 1%,
    $gray-lighten-5 30%,
    $gray-darken-1 99%,
    $gray-darken-4 100%
  );
  border-radius: 0 0 10px 0;
  transform-origin: bottom center;
  transition: all 0.2s ease;

  @media (max-width: $tablet-breakpoint) {
    width: $handle-width-mobile;
  }
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
    $primary-lighten-3 0%,
    $blue-darken-4 100%
  );
  transform-origin: bottom center;
  transition: all 0.2s ease;

  @media (max-width: $tablet-breakpoint) {
    width: 40px;
    height: 40px;
  }
}

.handle.clickable:not(.down) {
  &:before,
  &:after {
    animation: $pulse-animation;
  }
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
  transform: translateY(70px);

  @media (max-width: $tablet-breakpoint) {
    width: 45px;
    height: 45px;
  }
}

.ring {
  background: linear-gradient(
    to bottom,
    $gray-darken-2 0%,
    $gray-lighten-5 50%,
    $gray-darken-2 100%
  );
  border-radius: 0 10px 10px 0;
  height: 50%;
  right: -$ring-width;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform: translateY(50%);
  width: $ring-width;

  @media (max-width: $tablet-breakpoint) {
    width: $ring-width-mobile;
    right: -$ring-width-mobile;
  }
}
</style>
