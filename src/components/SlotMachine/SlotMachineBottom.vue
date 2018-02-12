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
  border-radius: 5px;
  width: calc(100% + 30px);
  align-self: center;
  position: relative;
  margin-top: 18px;

  &:after {
    content: '';
    position: absolute;
    top: -32px;
    left: 0;
    right: 0;
    border: 14px solid transparent;
    border-bottom: 20px solid $primary-darken-3;
    z-index: 0;
  }
}

</style>
