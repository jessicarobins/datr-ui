<template>
  <div class="footer-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SlotMachineBottom'
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
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

</style>
