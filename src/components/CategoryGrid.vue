<script setup>
import Classified from './CategoryCard.vue';
import image1 from '@/assets/images/广袤之境/呼伦贝尔大草原/呼伦贝尔大草原2.png';
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
    margin-top: 4vw;
    padding-left: 12vw;
    padding-right: 12vw;
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    align-items: center;
    width: 100%;
    height:100%;
    gap: 10vw;
}
</style>