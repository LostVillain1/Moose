<template>
    <div class="positions-container" @click="checkComp">
        <div v-for="(item, index) in getAllPositions" :key="index" class="pos-container_elem" @click="visibleModal = !visibleModal">
            <div class="elem_content">
                <p>{{item.name}}</p>
                <img :src='item.photo' class='pos-image'>
            </div>
            <menu-position v-if="visibleModal" :photo="item.photo" :name="item.photo"></menu-position>            
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MenuPosition from './Position.vue';

export default {
    name: 'MenuPositions',
    components: {
        MenuPosition
    },
    data() {
        return {
            visibleModal: false
        }
    },
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
    .positions-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly; 
        gap: 50px;
        overflow-y: auto;  
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