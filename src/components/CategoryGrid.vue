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
    <div id="grid">
        <p>点击 以前往地形</p>
        <div id="classifiers">
            <CategoryCard v-for="category in categories" :title="category.Name" :imgSrc="getCoverImage(category)"
                :categoryId="category.Id" />
        </div>
    </div>
</template>

<style scoped>
#grid {
    padding-top: 1.5vh;
    padding-left: 6vw;
    padding-right: 6vw;
    display: flex;
    flex-direction: column;
}

#grid p {
    font-family: "宋体";
    align-self: center;
}

#classifiers {
    margin-top: 1vh;
    display: flex;
    flex-direction: row;
    align-items: top;
    width: 100%;
    height: fit-content;
    gap: 7vw;
}
</style>