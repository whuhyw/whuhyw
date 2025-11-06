<script setup>
import CategoryCard from './CategoryCard.vue';
import scenicData from '@/data/scenicData.js';

const categories = scenicData.Categories;
const getCoverImage = (category) => {

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
    margin-bottom: 2rem;
}

.category-grid-intro {
    font-family: "宋体";
    align-self: center;
    font-size: 1.5rem;
    color: var(--text-color);
}

.category-grid-items {
    margin-top: 1vw;
    padding-left: 1vw;
    padding-right: 1vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3vw;
}

@media (max-width: 748px) {
  .category-grid-items {
    grid-template-columns: repeat(2, 1fr);
    gap: 5vw;
  }
}

@media (max-width: 480px) {
  .category-grid-items {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>