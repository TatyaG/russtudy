<template>
    <div>
        <Header></Header>
        <main>

            <div class="container title">
                <h1 class="title__text">Информационный портал для преподавателей РКИ</h1>
            </div>

            <section class="container promo flex">
                <div class="promo-left flex">
                    <div class="promo-top">
                        <div class="card-content">
                            <h2 class="card-title">Привет, Россия!</h2>
                            <p class="card-text">Обучение русскому языку как&nbsp;иностранному</p>
                            <p class="card-info">печатные и онлайн учебники</p>

                            <picture>
                                <source srcset="img/books_tablet.png" media="(max-width: 1415px)">
                                <img class="card-img_desktop" src="img/books_desktop.png" alt="Учебники">
                            </picture>

                        </div>
                        <button class="promo__btn btn btn-reset">Подробнее</button>
                    </div>

                    <div onclick="window.open('#','_newtab');" class="promo-bottom">
                        <div class="bottom_content card-content">
                            <h2 class="card-title">Курсы для педагогов</h2>
                            <p class="card-text card-width">Повышение квалификации РКИ</p>
                        </div>

                        <svg class="bottom__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L22.6667 22.6667M22.6667 22.6667V1.86667M22.6667 22.6667H1.86667" stroke="white"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                </div>

                <div onclick="window.open('#','_newtab');" class="promo-center">
                    <div class="card-content center_content">
                        <h2 class="card-title">Сервисы РКИ</h2>
                        <ul class="card-list list-reset">
                            <li class="card-text card-item">учебно-методические материалы</li>
                            <li class="card-text card-item">игры, тесты, карточки</li>
                            <li class="card-text card-item">видеоуроки</li>
                        </ul>
                    </div>
                    <svg class="center_arrow" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L22.6667 22.6667M22.6667 22.6667V1.86667M22.6667 22.6667H1.86667" stroke="white"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div class="promo-right">
                    <h2 class="card-title card-name">Афиша</h2>

                    <!-- Слайдер -->

                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <picture>
                                    <source srcset="img/right-card-mobile.webp" media="(max-width: 576px)">
                                    <source srcset="img/right-card-tablet.webp" media="(max-width: 1180px)">
                                    <img class="right-background" src="img/card-right.webp" alt="Курсы для педагогов">
                                </picture>
                            </div>
                            <div class="swiper-slide">
                                <picture>
                                    <source srcset="img/right-card-mobile.webp" media="(max-width: 576px)">
                                    <source srcset="img/right-card-tablet.webp" media="(max-width: 1180px)">
                                    <img class="right-background" src="img/card-right.webp" alt="Курсы для педагогов">
                                </picture>
                            </div>
                            <div class="swiper-slide">
                                <picture>
                                    <source srcset="img/right-card-mobile.webp" media="(max-width: 576px)">
                                    <source srcset="img/right-card-tablet.webp" media="(max-width: 1180px)">
                                    <img class="right-background" src="img/card-right.webp" alt="Курсы для педагогов">
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>

                    <!-- ------- -->

                    <a class="card-link flex" href="#">
                        Все новости
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L22.6667 22.6667M22.6667 22.6667V1.86667M22.6667 22.6667H1.86667" stroke="white"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </section>

            <section class="container subscription">
                <div class="subscription__content flex">
                    <p class="subscription__text">Хотите быть в&nbsp;курсе наших мероприятий, новостей
                        и&nbsp;обновлений?Подпишитесь на&nbsp;рассылку
                        и&nbsp;станьте частью нашего образовательного сообщества.</p>

                    <form action="#" method="post" id="form" class="form flex">
                        <label class="form_item flex">
                            <span class="form_name">E-mail</span>
                            <input id="emailForma" type="email" name="e-mail" placeholder="Введите E-mail" required
                                class="form__input">
                            <button class="modal__btn hidden"></button>
                        </label>
                        <button class="btn-reset btn form-btn" type="submit">Подписаться</button>
                    </form>
                </div>
            </section>

            <section class="container partners flex">
                <ul class="partners__list list-reset flex">
                    <li class="partners__item">
                        <a class="partners__link flex" href="http:obr.so/" target="_blank"><img src="img/обрсоюз.png"
                                alt="обрсоюз"></a>
                    </li>
                    <li class="partners__item">
                        <a class="partners__link flex" href="http:amities-russes.jimdofree.com/" target="_blank"><img
                                src="img/partner.png" alt="Amities Russes"></a>
                    </li>
                    <li class="partners__item">
                        <a class="partners__link flex" href="#"> <img src="img/partner_szkola.png" alt="Szkola"></a>
                    </li>
                    <li class="partners__item">
                        <a class="partners__link flex" href="http:www.rki.today/?m=1" target="_blank"><img
                                src="img/РКИ today.png" alt="РКИ"></a>
                    </li>
                    <li class="partners__item">
                        <a class="partners__link flex" href="http:www.arbat.gr/" target="_blank"> <img src="img/арбат.png"
                                alt="Арбат"></a>
                    </li>
                    <li class="partners__item">
                        <a class="partners__link flex" href="http:totaldict.ru/" target="_blank"><img src="img/диктант.png"
                                alt="Тотальный диктант"></a>
                    </li>
                </ul>
            </section>
        </main>
    </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';


export default {
    name: 'HomePage',
    components: { Header, Footer }
}
</script>
