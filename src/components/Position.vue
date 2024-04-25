<template>
    <div class="modal-back">
        <div class="pos-container">  
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'MenuPosition',
    props: ['photo, name']
}
</script>

<style>
    .modal-back {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }

    .pos-container {
        width: 60vw;
        height: 60vh;
        margin: auto;
        background-color: blue;
    }
</style>