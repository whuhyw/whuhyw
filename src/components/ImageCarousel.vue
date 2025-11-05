<template>
  <div class="carousel-container" :style="{height: props.carouselHeight }">
    <transition name="image" mode="in-out">
      <img 
        :key="currentImageIndex"
        :src="images[currentImageIndex]" 
        alt="Banner Image" 
        :width="props.imgWidth"
        class="carousel-image"
      >
    </transition>
    <transition name="image" mode="in-out">
      <img
        :key="currentImageIndex"
        :src="images[currentImageIndex]" 
        alt="Banner Image" 
        class="blurred-image"
      >
    </transition>
    <button @click="prevImage" class="carousel-btn prev-btn">&#10094;</button>
    <button @click="nextImage" class="carousel-btn next-btn">&#10095;</button>
    <a class="title">{{ props.title }}</a>
    <div class="dots-container">
      <span v-for="(image, index) in images" :key="index" @click="goToImage(index)"
        :class="{ 'dot': true, 'active': currentImageIndex === index }"></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 1. 接收从父组件 App.vue 传来的 images 数组
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  title:{
    type: String,
    default:''
  },
  imgWidth: {
    type: String,
    default: '70%'
  },
  carouselHeight:{
    type: String,
    default: '65vh'
  }
});

const currentImageIndex = ref(0);

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length;
};

const goToImage = (index) => {
  currentImageIndex.value = index;
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.carousel-image {
  position: absolute;
  height: 100%;
  object-fit: cover;
  object-position: center 65%;
  align-items: center;

  z-index: 5;opacity: 1;
  transition: opacity 0.4s ease-in-out;
}

.blurred-image {
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(5px);
  object-fit: fill;
  z-index: 0;
  
  opacity: 1;
  transition: opacity 0.4s ease-in-out;
}

.image-enter-active,
.image-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.image-enter-from,
.image-leave-to {
  opacity: 0;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.25);
  color: white;
  border: none;
  padding: 10px 17px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 7.5px;
  z-index: 10;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

.title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #111;
  font-family: 'rtsxt';
  font-size: 8vh;
  font-weight: bold;
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); */
  z-index: 10;
}

.dots-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: white;}
</style>
