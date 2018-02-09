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
  border: 15px dotted #FFEA00;
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
}

.display-3 {
  flex: 1;
  align-self: center;
  font-family: 'Fascinate Inline', cursive;
  height: 100%;
  padding: 20px;
  border-top-right-radius: 25%;
  border-top-left-radius: 25%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-transform: uppercase;
}
</style>
