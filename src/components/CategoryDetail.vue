<template>
    <div class="category-detail-page">
        <h1>{{ category.Name }}</h1>
        <div class="category-detail-attractions">
            <AttractionCard class="attraction" v-for="attraction in category.Attractions" :title="attraction.Name"
                :imgSrc="firstImageUrl(attraction)" :categoryId="categoryId" :zen="attraction.Zen"
                :attractionId="attraction.Id" />
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import scenicData from '@/data/scenicData';
import AttractionCard from '@/components/AttractionCard.vue';

const route = useRoute();
const categoryId = route.params.categoryId;
const category = scenicData.Categories.find(c => c.Id === categoryId);

const firstImageUrl = (attraction) => {
    const url = new URL(
        `../assets/images/${category.Name}/${attraction.Name}/${attraction.Details.Images[0]}`,
        import.meta.url
    ).href;

    return url;
};
</script>

<style scoped>
.category-detail-page {
    padding-top: 60px;
    padding-left: 6vw;
    padding-right: 6vw;
    background-color: var(--bg-color);
    min-height: 100vh;
}

.category-detail-page h1 {
    font-family: 'rtsxt', '宋体', sans-serif;
    font-size: 2.2rem;
    font-weight: 500;
    color: var(--h1-color);
    margin-top: 2vw;
    margin-bottom: 2rem;
}

.category-detail-attractions {
    margin-top: 2vw;
    padding-left: 1vw;
    padding-right: 1vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3vw;
}

@media (max-width: 1200px) {
  .attractions {
    grid-template-columns: repeat(3, 1fr);
    gap:4vw;
  }
}
</style>