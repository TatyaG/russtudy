<template>
    <div id="review" class="modal">
        <button class="modal__close btn-reset" @click="$emit('close-modal')">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M37.5 2.5L2.5 37.5" stroke="#0A2B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 2.5L37.5 37.5" stroke="#0A2B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
        <div class="modal__window">


        <swiper class="modal-slider"
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        navigation
        @swiper="onSwiper"
        
       >
        <swiper-slide class="review" v-for="review in reviews" :key="review.id">
            <div class="review__card flex">
                <picture>
                    <source srcset="">
                    <img class="review__image" :src="review.image" :alt="review.name">                    
                </picture>
                <div class="review__content">
                <div class="review__block">
                    <img class="" :src="review.image" :alt="review.name">
                    <p class="review__name">{{ review.name }}</p>
                    
                </div>
                <p class="review__desc">Наконец появился учебник, где интересно рассказано о современной России! Студенты узнают много нового и удивительного.</p>
                </div>
            </div>
        </swiper-slide>
        </swiper>

        </div>
    </div>
</template>


<script>

import { watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y  } from 'swiper/modules';
import 'swiper/css';


    export default {
        props: ['reviews', 'currentActiveSlide'],
        components: {Swiper, SwiperSlide },

        setup(props) {
            const onSwiper = (swiper) => {
                
                watch(() => [props.currentActiveSlide], (newValues, oldValues) => {
                    swiper.slideTo(newValues - 1)
                });      
            };
            
            return {
                onSwiper,
                modules: [Navigation],
            };
     
        },
    }
</script>

