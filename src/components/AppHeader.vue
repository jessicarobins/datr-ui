<template>
  <div class="app-header">
    <h1>date-o-matic</h1>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/variables';

$light-size: 10px;

.app-header {
  border: $light-size dotted $accent-1;
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
  position: relative;
}

.app-header:after {
  content: '';
  position: absolute;
  top: calc(-#{$light-size} - 2px);
  bottom: calc(-#{$light-size} - 2px);
  left: calc(-#{$light-size} - 2px);
  right: calc(-#{$light-size} - 2px);
  border: $light-size dotted $accent-4;
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
}

h1 {
  flex: 1;
  font-size: 4vw;
  align-self: center;
  font-family: 'Fascinate Inline', cursive;
  height: 100%;
  padding: 10px;
  text-transform: uppercase;
  -webkit-text-stroke: 1px $accent-4;
  color: #0D47A1;
  text-shadow: 1px 1px 2px black;
}
</style>
