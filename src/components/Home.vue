<template>
  <div class="home-page" @scroll="handleScroll">
    <ImageCarousel :images="images" img-width="100%" carousel-height="100vh" :showScrollHint="true"
      title="你想遨游怎样的中国？" :blurAmount="blurAmount" />
    <CategoryGrid ref="categoryGridRef" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ImageCarousel from './ImageCarousel.vue';
import CategoryGrid from './CategoryGrid.vue';

const currentImageIndex = ref(0)
const categoryGridRef = ref(null)
const isScrolling = ref(false)
const scrollTimeout = ref(null)
const blurAmount = ref(0)

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

]

const handleScroll = () => {
  const routerView = document.querySelector('.app-router-view')
  if (!routerView) return
  
  // 计算滚动位置相对于视口高度的比例
  const scrollPercentage = routerView.scrollTop / window.innerHeight
  
  // 当向上滚动时，逐渐增加模糊程度，最大为10px
  if (scrollPercentage > 0 && scrollPercentage <= 1) {
    blurAmount.value = Math.min(scrollPercentage * 15, 15)
  } else if (scrollPercentage > 1) {
    blurAmount.value = 15 // 达到最大模糊
  } else {
    blurAmount.value = 0 // 没有滚动或向下滚动时，不模糊
  }
}

const handleWheel = (event) => {

  if (isScrolling.value) return
  

  const routerView = document.querySelector('.app-router-view')
  if (!routerView) return
  

  isScrolling.value = true
  

  if (event.deltaY > 0) {

    if (routerView.scrollTop < window.innerHeight * 0.8) {
      event.preventDefault()
      

      routerView.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    } else {

      isScrolling.value = false
    }
  } 

  else if (event.deltaY < 0) {

    if (routerView.scrollTop > window.innerHeight * 0.2 && routerView.scrollTop < window.innerHeight * 1.8) {
      event.preventDefault()
      

      routerView.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {

      isScrolling.value = false
    }
  }
  

  scrollTimeout.value = setTimeout(() => {
    isScrolling.value = false
  }, 1000)
}

onMounted(() => {
  window.addEventListener('wheel', handleWheel, { passive: false })
  
  // 添加对app-router-view的滚动监听
  const routerView = document.querySelector('.app-router-view')
  if (routerView) {
    routerView.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel)
  
  // 移除对app-router-view的滚动监听
  const routerView = document.querySelector('.app-router-view')
  if (routerView) {
    routerView.removeEventListener('scroll', handleScroll)
  }
  
  if (scrollTimeout.value) {
    clearTimeout(scrollTimeout.value)
  }
})
</script>

<style scoped>
.home-container {
  background-color: var(--bg-color);
}

.home-title {
  font-size: 10vh;
  font-family: 'rtsxt';
  position: absolute;
  top: 42vh;
  left: 20vw;
  z-index: 15;
  color: var(--navbar-text);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>