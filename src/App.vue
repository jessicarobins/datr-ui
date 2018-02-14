<template>
  <v-app>
    <div id="app">
      <router-view/>
    </div>
  </v-app>
</template>

<style lang="scss">
@import './styles/variables';
$pulse-color: $accent-4;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba($pulse-color, 1);
  }
  70% {
    box-shadow: 0 0 8px 10px rgba($pulse-color, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba($pulse-color, 0);
  }
}
</style>
