<template>
  <div class="app-header">
    <h1 class="display-3">date-o-matic</h1>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-header {
  border: 15px dotted #F9A825;
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
  position: relative;
}

.app-header:after {
  content: '';
  position: absolute;
  top: -17px;
  bottom: -17px;
  left: -17px;
  right: -17px;
  border: 15px dotted #FFEA00;
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
}

.display-3 {
  flex: 1;
  align-self: center;
  font-family: 'Fascinate Inline', cursive;
  height: 100%;
  padding: 20px;
  text-transform: uppercase;
  -webkit-text-stroke: 1px #FFEA00;
  color: #0D47A1;
  text-shadow: 1px 1px 2px black;
}
</style>
