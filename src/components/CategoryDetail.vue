<template>
    <div class="categoryDetail">
        <h1>{{ category.Name }}</h1>
        <div class="attractions">
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
    //console.log(`../assets/images/${category.Name}/${attraction.Name}/${attraction.Details.Images[0]}`);
    return url;
};
</script>

<style scoped>
.categoryDetail {
    padding-top: 60px;
    padding-left: 5vw;
    padding-right: 5vw;
}

.categoryDetail h1 {
    font-family: 'rtsxt', '宋体', sans-serif;
    font-size: 2.2rem;
    font-weight: 500;
    color: #4a5568;
    margin-top: 2vw;
    margin-bottom: 1rem;
}

.attractions {
    margin-top: 2vw;
    padding-left: 1vw;
    padding-right: 1vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5vw;
}

@media (max-width: 1200px) {
  .attractions {
    grid-template-columns: repeat(3, 1fr);
    gap:4vw;
  }
}
</style>