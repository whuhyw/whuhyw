<script setup>
import { ref, onMounted } from 'vue'
import AMap from './components/AMap.vue'
import NavigationBar from './components/NavBar.vue'
import test from './components/Test.vue'

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
      <button class="banner-btn prev" @click="prevImage">
        <span><</span>
      </button>
      <button class="banner-btn next" @click="nextImage">
        <span>></span>
      </button>
    </div>
    <p id="placeholder">Lorem ipsum dolor sit amet sit gubergren qui eum diam sea nonumy ea takimata eos dolores blandit eos takimata.
      Diam dolor gubergren qui no invidunt tempor clita erat amet duo diam nulla at vulputate clita. Amet duis est amet.
      Erat no et eos vero ipsum sea ea accusam in qui labore kasd voluptua accumsan. Magna praesent stet feugiat sed
      sadipscing gubergren dolore diam diam hendrerit dolor ipsum dolor eu. Accusam dolor placerat aliquip ipsum tempor
      eum diam est eros kasd kasd sadipscing consequat rebum te esse ut. Gubergren et ipsum sadipscing ipsum lorem
      dignissim amet labore diam dolor et ipsum. Eu rebum sit lorem elitr lorem consetetur accusam eos consetetur
      commodo magna dolores tempor. Voluptua erat sed aliquyam. Qui erat dolor amet nonumy dolor et sed aliquyam diam
      sea dolor dolor magna iriure molestie vel. Aliquyam ea aliquam eirmod aliquip sea duis et consequat labore et sea
      consequat et invidunt. Dolore justo sit option ea diam vulputate. Te diam dolore lorem blandit tempor. Rebum
      sanctus lobortis iriure ea eros nonummy dolor sadipscing at.Lorem ipsum dolor sit amet sit gubergren qui eum diam sea nonumy ea takimata eos dolores blandit eos takimata.
      Diam dolor gubergren qui no invidunt tempor clita erat amet duo diam nulla at vulputate clita. Amet duis est amet.
      Erat no et eos vero ipsum sea ea accusam in qui labore kasd voluptua accumsan. Magna praesent stet feugiat sed
      sadipscing gubergren dolore diam diam hendrerit dolor ipsum dolor eu. Accusam dolor placerat aliquip ipsum tempor
      eum diam est eros kasd kasd sadipscing consequat rebum te esse ut. Gubergren et ipsum sadipscing ipsum lorem
      dignissim amet labore diam dolor et ipsum. Eu rebum sit lorem elitr lorem consetetur accusam eos consetetur
      commodo magna dolores tempor. Voluptua erat sed aliquyam. Qui erat dolor amet nonumy dolor et sed aliquyam diam
      sea dolor dolor magna iriure molestie vel. Aliquyam ea aliquam eirmod aliquip sea duis et consequat labore et sea
      consequat et invidunt. Dolore justo sit option ea diam vulputate. Te diam dolore lorem blandit tempor. Rebum
      sanctus lobortis iriure ea eros nonummy dolor sadipscing at.</p>
  </div>
</template>

<style>
/* 重置所有默认样式 */
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
  width: 100%;
  display: flex;
  flex-direction: column;
  /* 垂直排列，类似 StackPanel */
  min-height: 100vh;
  overflow-x:hidden;
}

/* --- Banner 样式大大简化 --- */
.banner-container {
  position: relative;
  padding: 0;
  /* 保留，用于定位内部的左右按钮 */
  top: 0;
  left: 0;
  width: 100vw;
  /* 使用 100% 而不是 100vw，因为它现在在正常流中 */
  height: 50vh;
  overflow: hidden;
}

#hero {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit:scale-down;
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
  z-index: 1;
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
  padding:30px;
}
</style>
