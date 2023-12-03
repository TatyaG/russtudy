<template>
    <div class="modal order">
        <div class="modal__overlay">
            <div class="modal__window">
                <button @click="$emit('close-order')" class="modal__close btn-reset">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M37.5 2.5L2.5 37.5" stroke="#0A2B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.5 2.5L37.5 37.5" stroke="#0A2B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </button>
               
            
                    <form class="order__form">
                        <label class="order__label currency">
                            <input type="radio">
                            <span class="currency__radio currency__radio--rub"></span>
                        </label>
                        <label class="order__label currency">
                            <input type="radio">
                            <span class="currency__radio currency__radio--usd"></span>
                        </label>
                        <label class="order__label currency">
                            <input type="radio">
                            <span class="currency__radio currency__radio--eur"></span>
                        </label>

                        <div class="order__container">

                        <div class="order__left">
                            <div v-for="book in books" :key="book.id" class="order__product">
                                <input type="checkbox">
                                <img :src="book.image" alt="">
                            </div>
                        </div>
                        <div class="order__right">
                            <div class="order__block">
                                <div class="between-block">
                                    <p class="order__title">Итого</p>
                                    <p class="order__price">0 ₽</p>
                                </div>
                                <div class="between-block">
                                    <p class="order__text">Товары, 0 шт.</p>
                                    <p class="order__price">0 ₽</p>
                                </div>

                                <p class="order__text order__text--info">Мы свяжемся с вами, чтобы уточнить сроки и стоимость доставки.</p>

                                <input class="order__input" type="text" placeholder="Промокод">

                                <button class="btn-reset order__submit" type="submit">Заказать</button>

                                <p class="order__agreement">Нажимая на кнопку «Заказать», вы подтверждаете, что ознакомлены c <a href="">Пользовательским соглашением</a> и <a href="">Политикой о персональных данных</a></p>
                                
                            </div>
                            <div class="order__block">
                                <p class="order__text">Любые вопросы по покупке книги: <a href="tel:+74993021872">+7 499 302-18-72</a>, <a href="tel:+79993333303">+7 999 333-33-03</a>, <a href="mailto:book@rus.study">book@rus.study</a></p>
                                <p class="order__text">Если вы не получили ответ, продублируйте, пожалуйста, письмо координатору проекта на <a href="mailto:pressantonov2013@gmail.com">pressantonov2013@gmail.com</a></p>
                                <p class="order__text">If you did not receive a response, please duplicate the letter to the project coordinator at <a href="mailto:pressantonov2013@gmail.com">pressantonov2013@gmail.com</a></p>
                            </div>
                        </div>

                        </div>
                    </form>
         
                
           
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['books']
    }
</script>