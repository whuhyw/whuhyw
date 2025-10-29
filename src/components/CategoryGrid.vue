<script setup>
import Classified from './CategoryCard.vue';
import image1 from '@/assets/无标题.png';
</script>

<template>
    <div id="classifiers">
        <Classified title="凌云之巅" :imgSrc="image1"/>
        <Classified title="蜿蜒之脉"/>
        <Classified title="瑰丽之彩"/>
        <Classified title="广袤之境"/>
    </div>
</template>

<style scoped>
#classifiers {
    margin-top: 5vw;
    padding-left: 8vw;
    padding-right: 8vw;
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    align-items: center;
    width: 100%;
    height:100%;
    gap: 8vw;
}
</style>