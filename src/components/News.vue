<template>
    <div>
       <div class="news__block all">
       <div class="all__block" v-for="(item, index) in toBeShow" :key="item.id" @click.prevent="openModalNews(index, item.id)">
               <img :src="item.image" alt="">
               <p :class="{'all__title--preview': item.tag == 'Анонсы', 'all__title--event': item.tag == 'Мероприятия', 'all__title--new': item.tag == 'Новости'}" class="all__title">{{ item.tag }}</p>
               <div class="all__text">
                   <p class="all__descr">{{ item.desc }}</p>
               </div>           
       </div>
       </div>
       <div class="news__btns">
           <button v-show="totalPage > 1 && currentPage != totalPage" @click.prevent="showMore()" class="btn-reset btn-background">
               Показать больше 
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
     <g clip-path="url(#clip0_5060_1102)">
       <path d="M1.5 5.5L12 16.5L22.5 5.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </g>
     <defs>
       <clipPath id="clip0_5060_1102">
         <rect width="18" height="24" fill="white" transform="matrix(0 1 1 0 0 0.5)"/>
       </clipPath>
     </defs>
   </svg>
   </button>
   
   <button v-show="hiddenBtn" @click="hide()" class="btn-reset btn-outline">
       Скрыть
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
     <g clip-path="url(#clip0_5060_12448)">
       <path d="M22.5 16.5L12 5.5L1.5 16.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </g>
     <defs>
       <clipPath id="clip0_5060_12448">
         <rect width="18" height="24" fill="white" transform="matrix(0 -1 -1 0 24 18.5)"/>
       </clipPath>
     </defs>
   </svg>
   </button>
       </div>
    </div>
               
   </template>

<script>
import NewsModal from './NewsModal.vue';
import useNewsStore from '@/stores/NewsStore.js'
    export default {
        props: ['filteredNews'],
        components: {NewsModal},
        data() {
            return {
                showModal: false,
                currentPage: 1,
                hiddenBtn: false,
            }
        },

        computed: {
            toBeShow() {
                return this.filteredNews.slice(0, this.currentPage * 5)
            },

            totalPage() {
                return Math.ceil(this.filteredNews.length / 5)
            },

            currentActiveSlide() {
                const NewsStore = useNewsStore()
                return NewsStore.currentActiveSlide 
            }
        },

        methods: {
            openModalNews(index, id) {
                const NewsStore = useNewsStore();
                NewsStore.currentActiveSlide = index
                this.$router.push({ name: 'newItem', params: { id: id} })
            },

            closeModalNews() {
                this.showModal = false;
                document.body.style.overflow = 'auto';
            },

            showMore() {
                if (this.currentPage < this.totalPage) {
                    this.hiddenBtn = true;
                    this.currentPage++
                } 
            },

            hide() {
                this.hiddenBtn = false
                this.currentPage =  this.currentPage - 1 || 1
            }
        }
    }
</script>