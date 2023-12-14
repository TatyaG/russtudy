<template>
 <div>
    <div class="news__block all">
    <div class="all__block" v-for="item in news" :key="item.id" @click.prevent="openModalNews(item.id)">
            <img :src="item.image" alt="">
            <p :class="{preview: item.tag == 'Анонсы', event: item.tag == 'Мероприятия'}" class="all__title">{{ item.tag }}</p>
            <div class="all__text">
                <p class="all__descr">{{ item.desc }}</p>
            </div>           
    </div>
    </div>

    <NewsModal :currentActiveSlide="currentActiveSlide" v-show="showModal" @close-modal-news="closeModalNews"></NewsModal>
 </div>
            
</template>

<script>
import NewsModal from './NewsModal.vue';
    export default {
        components: {NewsModal},
        data() {
            return {
                news: [
                    {
                        id: 1,
                        tag: 'Анонсы',
                        desc: 'Научно-практическая конференция «Теория и практика просветительской работы в гражданском и патриотическом воспитании в современной школе»',
                        image: 'img/preview-1.webp'
                    },
                    {
                        id: 2,
                        tag: 'Мероприятия',
                        desc: 'Фестиваль русского языка «Грамотные выходные» пройдёт в Калининградской области',
                        image: 'img/event-1.webp'
                    },
                    {
                        id: 3,
                        tag: 'Новости',
                        desc: 'Русский язык занимает значимое место среди иностранных языков в школах стран ЕАЭС',
                        image: 'img/new-1.webp'
                    },
                    {
                        id: 4,
                        tag: 'Новости',
                        desc: 'Центр открытого образования на русском языке начал работу в Алжире',
                        image: 'img/new-2.webp'
                    },
                    {
                        id: 5,
                        tag: 'Новости',
                        desc: 'Новый взгляд на воспитание: состоялась конференция «Теория и практика просветительской работы в гражданском и патриотическом воспитании в современной школе»',
                        image: 'img/new-3.webp'
                    },

                    {
                        id: 6,
                        tag: 'Анонсы',
                        desc: 'Научно-практическая конференция «Теория и практика просветительской работы в гражданском и патриотическом воспитании в современной школе»',
                        image: 'img/preview-1.webp'
                    },
                    {
                        id: 7,
                        tag: 'Мероприятия',
                        desc: 'Фестиваль русского языка «Грамотные выходные» пройдёт в Калининградской области',
                        image: 'img/event-1.webp'
                    },
                    {
                        id: 8,
                        tag: 'Новости',
                        desc: 'Русский язык занимает значимое место среди иностранных языков в школах стран ЕАЭС',
                        image: 'img/new-1.webp'
                    },
                    {
                        id: 9,
                        tag: 'Новости',
                        desc: 'Центр открытого образования на русском языке начал работу в Алжире',
                        image: 'img/new-2.webp'
                    },
                    {
                        id: 10,
                        tag: 'Новости',
                        desc: 'Новый взгляд на воспитание: состоялась конференция «Теория и практика просветительской работы в гражданском и патриотическом воспитании в современной школе»',
                        image: 'img/new-3.webp'
                    },
                ],

                showModal: false,
                currentActiveSlide: 0,
            }
        },

        methods: {
            openModalNews(id) {
                this.currentActiveSlide = id;
                this.showModal = true;
                document.body.style.overflow = 'hidden';
            },

            closeModalNews() {
                this.showModal = false;
                document.body.style.overflow = 'auto';
            }
        }
    }
</script>