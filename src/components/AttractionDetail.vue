<template>
  <div class="attraction-detail-page">
    <ImageCarousel :images="processedImages" />
    <AmapViewer class="attraction-detail-map" :marker="attraction.Details.Coordinates" marker-title="attraction.Name"
      info-content="<h3>东方明珠塔</h3><p>上海的标志性建筑。</p>" />
    <div class="attraction-detail-content">
      <h1>{{ attraction.Name }}</h1>
      <p class="attraction-detail-summary">{{ attraction.Details.Summary }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ImageCarousel from './ImageCarousel.vue';
import AmapViewer from './AmapViewer.vue';
import scenicData from '../data/scenicData.js';

const route = useRoute();
const categoryId = route.params.categoryId;
const attractionId = route.params.attractionId;
const category = scenicData.Categories.find(c => c.Id === categoryId);
const attraction = scenicData.Categories.flatMap(c => c.Attractions).find(a => a.Id === attractionId);
const processedImages = computed(() => {
  var url = attraction.Details.Images.map(image =>
    new URL(`../assets/images/${category.Name}/${attraction.Name}/${image}`, import.meta.url).href
  );
  console.log(url);
  return url;
});
</script>

<style scoped>
.attraction-detail-page {
  background-color: var(--bg-color);
  min-height: 100vh;
}

.attraction-detail-content {
  margin: 2rem 6vw;
  padding: 1.5rem;
  background-color: var(--card-bg);
  border-radius: 10px;
  box-shadow: var(--card-shadow);
}

.attraction-detail-content h1 {
  font-family: 'rtsxt', '宋体', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--h1-color);
  margin-bottom: 1.5rem;
}

.attraction-detail-map {
  position: fixed;
  left: 1.5vw;
  top: 8vh;
  z-index: 10;
}

.attraction-detail-summary {
  margin-top: 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
}
</style>