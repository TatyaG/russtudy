<template>
    <li class="about__item">
        <a href="" class="about__link book">
            <img src="img/book-1.webp" alt="">
            <div class="about__content">
            <p class="book__title">{{ book.name }}</p>
            <p class="book__level">уровень <span>{{ book.level }}</span></p>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 10L31.6667 31.6667M31.6667 31.6667V10.8667M31.6667 31.6667H10.8667" stroke="#0A2B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
        </a>
       
    </li>
</template>

<script>
    export default {
        props: ['book'],
    }
</script>