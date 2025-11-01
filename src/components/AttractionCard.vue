<template>
    <div id="classified" @click="handleClick">
        <img id="image" :src="props.imgSrc"/>
        <h2>{{ props.title }}</h2>
        <p>{{ props.zen }}</p>
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
    zen:{
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
//console.log(props.zen);
const handleClick = () => {
    router.push(`/attraction/${props.categoryId}/${props.attractionId}`);
};
</script>

<style scoped>
attraction {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    transition: all 0.3s ease-in-out;
}

attraction:hover {
    transform: scale(1.05);
}

#image {
    /* visibility: collapse; */
    aspect-ratio: 1/1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

h2 {
    margin-top: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    font-family: '宋体';
}
</style>