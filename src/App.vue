<!-- 这个页面的主题是自适应的 -->

<script setup>
import { ref, onMounted } from 'vue'
import NavigationBar from './components/AppNavigation.vue'
import Classifiers from './components/CategoryGrid.vue'
import ImageCarousel from './components/ImageCarousel.vue'

const isScrolled = ref(false)
const currentImageIndex = ref(0)
const images = [
  new URL('./assets/无标题.png', import.meta.url).href,
  new URL('./assets/Icon@1x.png', import.meta.url).href,
  // 在这里添加更多图片路径
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- 1. 将根 div 作为 Flex 容器 -->
  <div id="app">
    <NavigationBar :isScrolled="isScrolled" />
    <!-- 2. main 现在是一个 Flex 项目，会自动占据剩余空间 -->
    <div class="banner-container">
      <img id="hero" :src="images[currentImageIndex]" />
      <img id="blur" :src="images[currentImageIndex]" />
      <button class="banner-btn prev" @click="prevImage">
        <span><</span>
      </button>
      <button class="banner-btn next" @click="nextImage">
        <span>></span>
      </button>

      <div class="dots-container">
        <span v-for="(image, index) in images" :key="index" :class="['dot', { active: currentImageIndex === index }]"
          @click="currentImageIndex = index"/>
      </div>
    </div>

    <Classifiers/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* --- 核心：使用 Flexbox 进行垂直布局 --- */
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


.banner-container {
  position: relative;
  /* 保留，用于定位内部的左右按钮 */
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  /* 使用 100% 而不是 100vw，因为它现在在正常流中 */
  height: 50vh;
  z-index: 0;
  overflow: hidden;
  will-change: transform;  /* 添加这行 */
  transform: translateZ(0);  /* 添加这行 */
}

#hero {
  /* visibility: hidden; */
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  z-index: 5;
  display: block;
}

#blur {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  filter: blur(5px);
  background: white;
  z-index: 0;
  display: block;
}

.banner-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .banner-btn {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}

.banner-btn.prev {
  left: clamp(10px, 5vw, 20px);
}

.banner-btn.next {
  right: clamp(10px, 5vw, 20px);
}

.banner-btn:hover {
  transform: translateY(-50%) scale(1.1);
  background-color: rgba(255, 255, 255, 0.3);
}

.banner-btn span {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  line-height: 1;
  display: block;
}

#placeholder {
  padding: 30px;
}

.dots-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.dot.active {
  background-color: rgba(0, 0, 0, 0.55);
  transform: scale(1.2);
}

.dot:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

</style>
