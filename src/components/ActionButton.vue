<template>
  <button
    @click="onClick"
    :disabled="disabled"
    class="accent-font">{{ label }}</button>
</template>

<script>


export default {
  name: 'ActionButton',
  props: {
    onClick: Function,
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/variables';

button {
  background: linear-gradient(90deg, $accent-4 0%, $accent-1 80%, $accent-4 100%);
  border: 5px outset $accent-4;
  border-radius: 10px;
  box-shadow: 0px 0px 0px 3px $gray-darken-4;
  font-weight: bold;
  height: 90px;
  margin: 0 10px;
  width: 90px;
}

</style>
