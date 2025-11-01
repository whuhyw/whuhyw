<script setup>
import CategoryCard from './CategoryCard.vue';
import scenicData from '@/data/scenicData.js';

const categories = scenicData.Categories;
const getCoverImage = (category) => {
    // const url = new URL(
    //     `../assets/images/${category.Name}/${category.CoverImage}`,
    //     import.meta.url
    // ).href;
    // console.log(url);
    // console.log(`../assets/images/${category.Name}/${category.CoverImage}`);
    return `./src/assets/images/${category.Name}/${category.CoverImage}`;
};
</script>

<template>
    <div id="classifiers">
        <CategoryCard 
            v-for="category in categories" 
            :title="category.Name"
            :imgSrc="getCoverImage(category)"
            :categoryId="category.Id"
        />
    </div>
</template>

<style scoped>
#classifiers {
    margin-top: 4vw;
    padding-left: 10vw;
    padding-right: 10vw;
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    align-items: center;
    width: 100%;
    height:100%;
    gap: 8vw;
}
</style>