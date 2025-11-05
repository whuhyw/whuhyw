<template>
  <div>
    <ImageCarousel :images="images" img-width="100%" carousel-height="100vh" :showScrollHint="true"
      title="你想遨游怎样的中国？" />
    <CategoryGrid />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ImageCarousel from './ImageCarousel.vue';
import CategoryGrid from './CategoryGrid.vue';

const currentImageIndex = ref(0)
const images = [
  new URL('@/assets/images/瑰丽之彩/九寨沟/4.png', import.meta.url).href,
  new URL('@/assets/images/广袤之境/塔克拉玛干大沙漠/4.png', import.meta.url).href,
  new URL('@/assets/images/广袤之境/呼伦贝尔大草原/3.png', import.meta.url).href,
  new URL('@/assets/images/瑰丽之彩/林海雪原/5.png', import.meta.url).href,
  new URL('@/assets/images/凌云之巅/泰山/4.png', import.meta.url).href,
  new URL('@/assets/images/凌云之巅/玉龙雪山/2.png', import.meta.url).href,
  new URL('@/assets/images/广袤之境/福建霞浦滩涂/6.png', import.meta.url).href,
  new URL('@/assets/images/蜿蜒之脉/雅鲁藏布江/3.png', import.meta.url).href,
  new URL('@/assets/images/蜿蜒之脉/黄河/4.png', import.meta.url).href,
  new URL('@/assets/images/瑰丽之彩/黄龙/3.png', import.meta.url).href,
  // 在这里添加更多图片路径
]
</script>

<style scoped>
.title {
  font-size: 10vh;
  font-family: 'rtsxt';
  color: #111;
  position: absolute;
  top: 42vh;
  left: 20vw;
  z-index: 15;
}
</style>