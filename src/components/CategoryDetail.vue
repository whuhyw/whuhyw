<template>
    <div class="category-detail-page">
        <h1>{{ category.Name }}</h1>
        <div class="category-description-container">
            <div class="description-decoration">
                <div class="decoration-line"></div>
                <div class="decoration-symbol">◆</div>
                <div class="decoration-line"></div>
            </div>
            <div class="category-description">
                {{ category.Description }}
            </div>
            <div class="description-decoration">
                <div class="decoration-line"></div>
                <div class="decoration-symbol">◆</div>
                <div class="decoration-line"></div>
            </div>
        </div>
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
    font-size: 3.5rem;
    font-weight: 500;
    color: var(--h1-color);
    margin-top: 2vw;
    margin-bottom: 2rem;
}

.category-description-container {
    margin: 3rem 0;
    padding: 2rem 3rem;
    position: relative;
    background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255,255,255,0.1);
}

.description-decoration {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
}

.decoration-line {
    height: 1px;
    width: 100px;
    background: linear-gradient(90deg, transparent, var(--h1-color), transparent);
}

.decoration-symbol {
    margin: 0 15px;
    color: var(--h1-color);
    font-size: 1.2rem;
}

.category-description {
    font-family: '宋体', serif;
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--text-color);
    text-align: center;
    padding: 0 2rem;
    letter-spacing: 1px;
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
  .category-detail-attractions {
    grid-template-columns: repeat(3, 1fr);
    gap:4vw;
  }
}
</style>