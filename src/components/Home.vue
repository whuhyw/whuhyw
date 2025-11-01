<template>
  <div>
    <ImageCarousel :images="images" />
    <CategoryGrid />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ImageCarousel from './ImageCarousel.vue';
import CategoryGrid from './CategoryGrid.vue';

const currentImageIndex = ref(0)
const images = [
  new URL('@/assets/images/广袤之境/呼伦贝尔大草原/1.png', import.meta.url).href,
  new URL('@/assets/images/广袤之境/呼伦贝尔大草原/2.png', import.meta.url).href,
  new URL('@/assets/images/广袤之境/呼伦贝尔大草原/3.png', import.meta.url).href,
  // 在这里添加更多图片路径
]
</script>