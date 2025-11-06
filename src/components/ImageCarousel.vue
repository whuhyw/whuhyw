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
    <div class="dots-container" v-if="!props.showScrollHint">
      <span v-for="(image, index) in images" :key="index" @click="goToImage(index)"
        :class="{ 'dot': true, 'active': currentImageIndex === index }"></span>
    </div>
    <div class="scroll-hint" v-if="props.showScrollHint">
      <i class="scroll-icon"></i>
      <span class="scroll-text">向下滚动</span>
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
  },
  showScrollHint: {
    type: Boolean,
    default: false
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
  color: black;
  transform: translate(-50%, -50%);
  font-family: 'rtsxt';
  font-size: 8vh;
  font-weight: bold;
  text-shadow: 5px 5px 0px rgba(255, 255, 255, 0.75);
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
  background-color: white;
}

.scroll-hint {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  animation: float 2s ease-in-out infinite;
}

.scroll-icon {
  width: 25px;
  height: 40px;
  border: 2px solid white;
  border-radius: 15px;
  position: relative;
}

.scroll-icon::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
  animation: scroll 2s ease-in-out infinite;
}

.scroll-text {
  color: white;
  margin-top: 10px;
  font-size: 12px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

@keyframes float {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
    top: 8px;
  }
  100% {
    opacity: 0;
    top: 30px;
  }
}
</style>
