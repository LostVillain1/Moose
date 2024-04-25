<template>
  <div class="container">
    <menu-header></menu-header>
    <menu-options></menu-options>
    <menu-positions></menu-positions> 
  </div>
</template>

<script>
import MenuHeader from './components/MenuHeader.vue'
import MenuOptions from './components/MenuOptions.vue'
import MenuPositions from './components/MenuPositions.vue';



export default {
  name: 'App',
  components: {
    MenuHeader,
    MenuOptions,
    MenuPositions,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  overflow-y: auto; 
}
</style>
