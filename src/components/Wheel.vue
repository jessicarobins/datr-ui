<template>
  <div class="wheel">
    <button v-bind:class="handleClass" @click="toggle"></button>
  </div>
</template>

<script>

export default {
  name: 'Wheel',
  data() {
    return {
      handleDown: false,
      items: [
        'local_bar',
        'local_cafe',
        'local_dining',
        'local_drink',
        'local_pizza',
        'restaurant',
        'restaurant_menu',
        'cake', 8, 9],
      activityItems: [
        'local_library',
        'local_mall',
        'local_movies',
        'local_activity',
        'local_see',
        'terrain',
        'palette',
        'musical_note',
        'beach_access',
        'pool',
        'casino',
        'spa',
        'golf_course'
      ]
    }
  },
  computed: {
    handleClass() {
      return {
        handle: true,
        down: this.handleDown
      }
    }
  },
  methods: {
    toggle() {
      this.handleDown = true
      setTimeout(() => {
        this.handleDown = false
      }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wheel {
  position: relative;
  width: 70vw;
}

.handle {
  position: absolute;
  right: 0;
  top: 100px;
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
</style>
