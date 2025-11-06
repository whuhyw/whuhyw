<template>
  <div>
    <ImageCarousel :images="processedImages" />
    <AmapViewer id="amap" :marker="attraction.Details.Coordinates" marker-title="attraction.Name"
      info-content="<h3>东方明珠塔</h3><p>上海的标志性建筑。</p>" />
    <div id="content">
      <h1>{{ attraction.Name }}</h1>
      <p id="summary">{{ attraction.Details.Summary }}</p>
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
#content {
  margin: 1.5rem 1.5rem;
}

#content h1 {
  font-family: 'rtsxt', '宋体', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

#amap {
  position: fixed;
  left: 1.5vw;
  top: 8vh;
  z-index: 10;
}

#summary {
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: large;
}
</style>