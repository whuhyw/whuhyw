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
    <div class="category-grid">
        <p class="category-grid-intro">点击 以前往地形</p>
        <div class="category-grid-items">
            <CategoryCard v-for="category in categories" :title="category.Name" :imgSrc="getCoverImage(category)"
                :categoryId="category.Id" />
        </div>
    </div>
</template>

<style scoped>
.category-grid {
    padding-top: 1.5vh;
    padding-left: 6vw;
    padding-right: 6vw;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-color);
    min-height: 50vh;
}

.category-grid-intro {
    font-family: "宋体";
    align-self: center;
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: 1rem;
}

.category-grid-items {
    display: flex;
    flex-direction: row;
    align-items: top;
    width: 100%;
    height: fit-content;
    gap: 7vw;
}
</style>