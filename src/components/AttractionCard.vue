<template>
    <div class="attraction-card" @click="handleClick">
        <img class="attraction-card-image" :src="props.imgSrc" />
        <div class="attraction-card-content">
            <h2>{{ props.title }}</h2>
            <p>{{ props.zen }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
    imgSrc: {
        type: String,
        required: true,
        default: () => new URL('@/assets/images/广袤之境/呼伦贝尔大草原/2.png', import.meta.url).href
    },
    title: {
        type: String,
        required: true,
    },
    zen: {
        type: String,
        required: true,
    },
    categoryId: {
        type: String,
        required: true,
    },
    attractionId: {
        type: String,
        required: true,
    }
});

const handleClick = () => {
    router.push(`/attraction/${props.categoryId}/${props.attractionId}`);
};
</script>

<style scoped>
.attraction-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: var(--card-bg);
    box-shadow: var(--card-shadow);
    transition: all 0.3s ease-in-out;
    padding: 15px;
    overflow: hidden;
}

.attraction-card:hover {
    transform: scale(1.05);
}

.attraction-card-image {

    aspect-ratio: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.attraction-card-content {
    width: 100%;
    padding: 10px 5px;
    box-sizing: border-box;
}

h2 {
    margin: 10px 0;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    font-family: '宋体';
    color: var(--h2-color);
    width: 100%;
    padding: 0;
    box-sizing: border-box;
}

p {
    margin: 5px 0 0;
    font-size: 1rem;
    color: var(--text-color);
    font-family: '宋体';
    line-height: 1.5;
}
</style>