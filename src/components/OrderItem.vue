<template>
     <label :class="{active: selectedProducts.includes(book.id)}" class="product">
                                <div class="order__product">
                                   <input type="checkbox" class="visually-hidden product__input" name="product"  @change="addProduct(book.id)">
                                <span class="product__checkbox"></span>
                                <img :src="book.image" alt="">
                                <div class="product__name">
                                    <p>{{ book.type }}</p>
                                    <p>{{ book.name }} {{ book.level }}</p>
                                </div> 
                                </div>
                                
                                <div v-if="!book.isOnline" class="product__count count">
                                    <p class="count__text">Количество</p>
                                    <div class="count__block">
                                        <button @click.prevent="decrementProduct(book.amount)" class="btn-reset product__btn product__btn--decrement"></button>
                                        <input type="number" class="count__num" :name="'count['+ book.id +']'" v-model="amount">
                                        <button @click.prevent="incrementProduct(book.amount)" class="btn-reset product__btn product__btn--increment"></button>
                                    </div>
                                </div>

                                <div v-else-if="book.isOnline" class="product__count sub">
                                    <p class="sub__text">
                                        Подписка
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <rect width="12" height="12" rx="6" fill="#B6D3FD"/>
  <path d="M6 9.5V9.505M6 7.5V2.5" stroke="#0A2B49" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                                    </p>
                                    <div class="flex sub__block">
                                        <label class="sub__label">
                                            <input type="radio" class="visually-hidden" :name="'sub['+ book.id +']'" value="year" :disabled="!selectedProducts.includes(book.id)" :checked="selectedProducts.includes(book.id)">
                                            <span></span>
                                            1 год
                                        </label>
                                        <label class="sub__label">
                                            <input type="radio" class="visually-hidden" :name="'sub['+ book.id +']'" value="always" :disabled="!selectedProducts.includes(book.id)" :checked="selectedProducts.includes(book.id)">
                                            <span></span>
                                            Навсегда
                                        </label>
                                        
                                        
                                    </div>
                                </div>
                                <p class="product__price">{{ book.price }} ₽</p>
                            </label>
</template>

<script>
import { Form, Field, ErrorMessage   } from 'vee-validate';
    export default {
        data() {
            return {
                selectedProducts: []
            }
        },

        props: ['book'],
        components: {Form, Field, ErrorMessage },

        computed: {
            amount: {
                get() {
                return this.book.amount
            },

            set(value) {
                this.book.amount = value
            }
            }
            
        },

        methods: {
            incrementProduct() {
                this.amount += 1
            },

            decrementProduct() {
                if (this.amount > 1) {
                    this.amount -= 1
                }
            },

            addProduct(id) {
                if (!this.selectedProducts.includes(id)) {
                    this.selectedProducts.push(id)
                } else {
                   const index = this.selectedProducts.indexOf(id);
                   this.selectedProducts.splice(index, 1)
                } 
                
            }
        }
    }
</script>