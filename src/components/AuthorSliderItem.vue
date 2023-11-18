<template>
    <swiper-slide class="author">
        <img class="author__img" :src="author.src" :alt="author.name">
        <p class="author__name">{{ author.name }}</p>
        <p class="author__info">{{ author.info }}</p>
    </swiper-slide>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
    export default {
        props: ['author'],
        components: {Swiper, SwiperSlide}
    }
</script>