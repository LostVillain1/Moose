<template>
  <div class="options">
    <div class="options__elem">БУРГЕРЫ</div>
    <div class="options__elem">ТАКО</div>
    <div class="options__elem">ЗАКУСКИ</div>
    <div class="options__elem">ДОПЫ</div>
  </div>
</template>

<script>
export default {
    name: 'MenuOptions',
}
</script>

<style>
.options {
    display: flex;
    justify-content: space-around;
    padding: 30px;
    height: 20vh;
    font-weight: bold;
    gap: 15px
}

.options__elem {
    transform: skew(-20deg);
    border: thick double black;
    padding: 5px;
    height: 40px;
}


</style>