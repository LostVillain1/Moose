<template>
    <div class="pos-container" @click="checkComp">
        <div v-for="(item, index) in getAllPositions" :key="index" @click="console.log(item.photo)">
            <p>{{item.name}}</p>
            <img :src='getSrc(item.photo)'>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'MenuPositions',
    computed: {
        ...mapGetters(['getAllPositions'])
    },
    methods: {
        checkComp() {
            console.log(this.getAllPositions)
        },
        getSrc(src) {
            return require(src)
        }
    }
}
</script>

<style>
    .pos-container {
        width : 400px;
        height : 400px;
    }
</style>