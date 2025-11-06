<template>
  <div class="carousel-container" :style="{height: props.carouselHeight }">
    <transition name="image" mode="in-out">
      <img 
        :key="currentImageIndex"
        :src="images[currentImageIndex]" 
        alt="Banner Image" 
        :width="props.imgWidth"
        class="carousel-image"
        :style="{ filter: `blur(${props.blurAmount}px)` }"
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
    <button @click="prevImage" class="carousel-btn carousel-btn--prev">&#10094;</button>
    <button @click="nextImage" class="carousel-btn carousel-btn--next">&#10095;</button>
    <a class="carousel-title">{{ props.title }}</a>
    <div class="carousel-dots-container" v-if="!props.showScrollHint">
      <span v-for="(image, index) in images" :key="index" @click="goToImage(index)"
        :class="{ 'carousel-dot': true, 'carousel-dot--active': currentImageIndex === index }"></span>
    </div>
    <div class="carousel-scroll-hint" v-if="props.showScrollHint">
      <i class="carousel-scroll-icon"></i>
      <span class="carousel-scroll-text">向下滚动</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


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
  },
  blurAmount: {
    type: Number,
    default: 0
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
  box-shadow: var(--image-shadow);
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
  background-color: rgba(52, 73, 94, 0.7);
  color: white;
  border: none;
  padding: 10px 17px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 7.5px;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: var(--image-shadow);
}

.carousel-btn--prev {
  left: 10px;
}

.carousel-btn--next {
  right: 10px;
}

.carousel-title{
  position: absolute;
  top: 50%;
  left: 50%;
  color: var(--navbar-text);
  transform: translate(-50%, -50%);
  font-family: 'rtsxt';
  font-size: clamp(2.25rem, 4vw, 4.5rem);
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.carousel-dots-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}

.carousel-dot--active {
  background-color: var(--accent-color);
  transform: scale(1.2);
  box-shadow: 0 0 5px rgba(230, 126, 34, 0.5);
}

.carousel-scroll-hint {
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

.carousel-scroll-icon {
  width: 25px;
  height: 40px;
  border: 2px solid white;
  border-radius: 15px;
  position: relative;
}

.carousel-scroll-icon::before {
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

.carousel-scroll-text {
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
