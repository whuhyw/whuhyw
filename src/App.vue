<script setup>
import { ref, onMounted } from 'vue'
import NavigationBar from './components/AppNavigation.vue'
import Classifiers from './components/CategoryGrid.vue'
import ImageCarousel from './components/ImageCarousel.vue'

const isScrolled = ref(false)

const currentImageIndex = ref(0)
const images = [
  new URL('@/assets/images/广袤之境/呼伦贝尔大草原/呼伦贝尔大草原1.png', import.meta.url).href,
  new URL('@/assets/images/广袤之境/呼伦贝尔大草原/呼伦贝尔大草原2.png', import.meta.url).href,
  new URL('@/assets/images/广袤之境/呼伦贝尔大草原/呼伦贝尔大草原3.png', import.meta.url).href,
  // 在这里添加更多图片路径
]
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div id="app">
    <NavigationBar :isScrolled="isScrolled" />
    <ImageCarousel :images="images"/>
    <Classifiers/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  padding: 0;
  padding-top: 60px;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}

@media (max-width: 768px) {
  .banner-btn {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}

</style>
