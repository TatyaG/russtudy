<template>
    <div id="news" class="modal">
        <button class="modal__close btn-reset" @click="$emit('close-modal-news')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M37.5 2.5L2.5 37.5" stroke="#0A2B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.5 2.5L37.5 37.5" stroke="#0A2B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
        </button>
        <div class="modal__overlay">
            <div class="modal__window">
                <swiper class="modal-slider"
                :modules="modules"
                :slides-per-view="1"
                navigation
                @swiper="onSwiper"      
                >
                <swiper-slide class="new" v-for="item in news" :key="item.id">
                    <div class="new__block">
                        
                        <div class="new__left" v-show="item.video != ''">
                            <p class="new__tag">{{ item.tag }}</p>
                            <iframe width="540" height="900" :src="item.video" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                        <div v-show="item.video == ''" class="new__left">
                            <p class="new__tag">{{ item.tag }}</p>
                            <img :src="item.image" :alt="item.title">
                        </div>
                        
                    
                    <div class="new__right">
                        <p class="new__title">{{ item.title }}</p>
                        <p class="new__desc">{{ item.desc }}</p>
                    </div>                   
                </div>
                </swiper-slide>
                </swiper>
                
            </div>
        </div>
    </div>
</template>

<script>
import { watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
    export default {
        components: {Swiper, SwiperSlide, Navigation},
        props: ['currentActiveSlide'],
        data() {
            return {
                news: [
                    {
                        id: 1,
                        tag: 'Анонсы',
                        title: 'Прошёл турнир по русскому языку в области науки',
                        desc: 'Научно-практическая конференция «Теория и практика просветительской работы в гражданском и патриотическом воспитании в современной школе»',
                        image: 'img/preview-1.webp',
                        video: 'https://www.youtube.com/embed/GNrdg3PzpJQ?si=HfEDMQxvZzphSm84'
                    },
                    {
                        id: 2,
                        tag: 'Мероприятия',
                        title: 'Прошёл турнир по русскому языку в области науки',
                        desc: 'Фестиваль русского языка «Грамотные выходные» пройдёт в Калининградской области',
                        image: 'img/event-1.webp',
                        video: ''
                    },
                    {
                        id: 3,
                        tag: 'Новости',
                        title: 'Прошёл турнир по русскому языку в области науки',
                        desc: 'Русский язык занимает значимое место среди иностранных языков в школах стран ЕАЭС',
                        image: 'img/new-1.webp',
                        video: ''
                    },
                    {
                        id: 4,
                        tag: 'Новости',
                        title: 'Прошёл турнир по русскому языку в области науки',
                        desc: 'Центр открытого образования на русском языке начал работу в Алжире',
                        image: 'img/new-2.webp',
                        video: ''
                    },
                    {
                        id: 5,
                        tag: 'Новости',
                        title: 'Прошёл турнир по русскому языку в области науки',
                        desc: 'Новый взгляд на воспитание: состоялась конференция «Теория и практика просветительской работы в гражданском и патриотическом воспитании в современной школе»',
                        image: 'img/new-3.webp',
                        video: ''
                    },

                    {
                        id: 6,
                        tag: 'Анонсы',
                        title: 'Прошёл турнир по русскому языку в области науки',
                        desc: 'Научно-практическая конференция «Теория и практика просветительской работы в гражданском и патриотическом воспитании в современной школе»',
                        image: 'img/preview-1.webp',
                        video: ''
                    },
                    {
                        id: 7,
                        tag: 'Мероприятия',
                        title: 'Прошёл турнир по русскому языку в области науки',
                        desc: 'Фестиваль русского языка «Грамотные выходные» пройдёт в Калининградской области',
                        image: 'img/event-1.webp',
                        video: ''
                    },
                    {
                        id: 8,
                        tag: 'Новости',
                        title: 'Прошёл турнир по русскому языку в области науки',
                        desc: 'Русский язык занимает значимое место среди иностранных языков в школах стран ЕАЭС',
                        image: 'img/new-1.webp',
                        video: ''
                    },
                    {
                        id: 9,
                        tag: 'Новости',
                        title: 'Прошёл турнир по русскому языку в области науки',
                        desc: 'Центр открытого образования на русском языке начал работу в Алжире',
                        image: 'img/new-2.webp',
                        video: ''
                    },
                    {
                        id: 10,
                        tag: 'Новости',
                        title: 'Прошёл турнир по русскому языку в области науки',
                        desc: 'Новый взгляд на воспитание: состоялась конференция «Теория и практика просветительской работы в гражданском и патриотическом воспитании в современной школе»',
                        image: 'img/new-3.webp',
                        video: ''
                    },
                ],
            }
        },

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