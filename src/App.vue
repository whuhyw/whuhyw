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

.router {
  width: 100%;
  max-height: calc(100vh - 60px);
}

@media (max-width: 768px) {
  .banner-btn {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}
</style>
