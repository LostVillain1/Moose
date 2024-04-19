<template>
    <div class="pos-container" @click="checkComp">
        <div v-for="(item, index) in getAllPositions" :key="index" class="pos-container_elem">
            <div class="elem_content">
                <p>{{item.name}}</p>
                <img :src='item.photo' class='pos-image'>
            </div>            
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'MenuPositions',
    computed: {
        ...mapGetters(['getAllPositions']),
    },
    methods: {
        checkComp() {
            console.log(this.getAllPositions)
        },
    }
}
</script>

<style>
    .pos-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly; 
        gap: 50px       
    }

    
    .pos-container_elem {
        border: 10px solid;
        border-image-slice: 1;
        border-width: 5px;
        display: flex;
        justify-content: center;
        width : 300px;
        height : 300px;
    }

    .elem_content {
    }

    .pos-image {
        max-height: 90%;
        max-width: 90%;
    }
</style>