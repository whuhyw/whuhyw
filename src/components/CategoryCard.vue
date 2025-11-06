<template>
    <div id="classified" @click="handleClick">
        <img id="image" :src="props.imgSrc"/>
        <h2>{{ props.title }}</h2>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    imgSrc: {
        type: String,
        required: true,
        default: () => new URL('@/assets/images/广袤之境/呼伦贝尔大草原/1.png', import.meta.url).href
    },
    title: {
        type: String,
        required: true,
    },
    categoryId: {
        type: String,
        required: true,
    }
}
)

const handleClick = () => {
    router.push(`/category/${props.categoryId}`);
};

</script>

<style scoped>
#classified {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    border-radius: 10px;
    background-color: var(--card-bg);
    box-shadow: var(--card-shadow);
    transition: all 0.3s ease-in-out;
    padding: 15px;
    overflow: hidden;
}

#classified:hover {
    transform: scale(1.05);
}

#image {
    /* visibility: collapse; */
    aspect-ratio: 4/3;
    width: 100%;
    object-fit:cover;
    border-radius: 10px;
}

h2 {
    margin: 10px 0;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    font-family: '宋体';
    color: var(--h2-color);
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
}
</style>