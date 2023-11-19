<template>
    <ul class="about__list list-reset">
        <BookItem v-for="book in books" :key="book.id" :book="book"></BookItem>
    </ul>
</template>

<script>
import BookItem from './BookItem.vue';
    export default {
        props: ['books'],
        components: {BookItem}
    }
</script>