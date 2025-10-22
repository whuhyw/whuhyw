<script setup>
import { ref, onMounted } from 'vue'
import AMap from './components/AMap.vue'
import NavigationBar from './components/NavBar.vue'
import test from './components/Test.vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <NavigationBar :isScrolled="isScrolled" />
    <main>
      <section id="home">
        
      </section>
    </main>
  </div>
</template>

<style>
section {
  min-height: 100vh;
  padding: 80px 20px;
  box-sizing: border-box;
}
</style>
