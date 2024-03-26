<template>
  <div class="header">
    <img src="../assets/moose_logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'MenuHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.header {
  background-color: black;
  height: 20vh;
  display: flex;
  justify-content: center;
}

img {
  background-color: black;
  height: 20vh;
}
</style>
