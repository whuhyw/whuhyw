<script setup>
import { ref, onMounted } from 'vue'
import NavigationBar from './components/AppNavigation.vue'

const isScrolled = ref(false)

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
    <router-view class="router"/>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#app {
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  height:100%;
  display: flex;
  flex-direction: column;
}

.router {
  box-sizing: border-box;
  width: 100vw;
  overflow-y: auto;
}

.router-view {
  transition: opacity 0.3s ease;
}

@media (max-width: 768px) {
  .banner-btn {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}
</style>
