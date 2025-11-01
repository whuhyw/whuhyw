<template>
    <div>
        <div class="attractions">
            <AttractionCard class="attraction" v-for="attraction in category.Attractions" :title="attraction.Name"
                :imgSrc="firstImageUrl(attraction)" :categoryId="categoryId" :zen="attraction.Zen"
                :attractionId="attraction.Id" />
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import scenicData from '@/data/scenicData';
import AttractionCard from '@/components/AttractionCard.vue';

const route = useRoute();
const categoryId = route.params.categoryId;
const category = scenicData.Categories.find(c => c.Id === categoryId);

const firstImageUrl = (attraction) => {
    const url = new URL(
        `../assets/images/${category.Name}/${attraction.Name}/${attraction.Details.Images[0]}`,
        import.meta.url
    ).href;
    //console.log(`../assets/images/${category.Name}/${attraction.Name}/${attraction.Details.Images[0]}`);
    return url;
};
</script>

<style scoped>
.attractions {
    margin-top: 4vw;
    padding-left: 5vw;
    padding-right: 5vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8vw;
    ;
}
</style>