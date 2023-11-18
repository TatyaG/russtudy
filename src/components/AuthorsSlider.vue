<template>
       <swiper :modules="modules" navigation :slides-per-view="4" class="swiper authors-slider" @swiper="onSwiper" @slideChange="onSlideChange">
    
        <swiper-slide class="author" v-for="author in authors" :key="author.id" :authors="authors">
        <img class="author__img" :src="author.src" :alt="author.name">
        <p class="author__name">{{ author.name }}</p>
        <p class="author__info">{{ author.info }}</p>
    </swiper-slide>
        </swiper>
</template>

<script>
import AuthorSliderItem from './AuthorSliderItem.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
    export default {
        props: ['authors'],
        components: {AuthorSliderItem, Swiper, SwiperSlide},
        setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation],
      };
    },
    }
</script>