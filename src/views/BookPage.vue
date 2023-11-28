<template>
    <div>
        <Header></Header>
        <main>
            <div class="container">
                <router-link :to="{name: 'home'}" href="" class="back">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.47007 11.4702C3.32962 11.6108 3.25073 11.8014 3.25073 12.0002C3.25073 12.1989 3.32962 12.3895 3.47007 12.5302L9.47007 18.5302C9.53873 18.6038 9.62153 18.6629 9.71353 18.7039C9.80553 18.7449 9.90485 18.767 10.0056 18.7687C10.1063 18.7705 10.2063 18.752 10.2997 18.7143C10.3931 18.6766 10.4779 18.6204 10.5491 18.5492C10.6203 18.478 10.6765 18.3931 10.7142 18.2998C10.7519 18.2064 10.7704 18.1063 10.7687 18.0056C10.7669 17.9049 10.7448 17.8056 10.7039 17.7136C10.6629 17.6216 10.6038 17.5388 10.5301 17.4702L5.81007 12.7502H20.0001C20.199 12.7502 20.3898 12.6711 20.5304 12.5305C20.6711 12.3898 20.7501 12.1991 20.7501 12.0002C20.7501 11.8012 20.6711 11.6105 20.5304 11.4698C20.3898 11.3292 20.199 11.2502 20.0001 11.2502H5.81007L10.5301 6.53015C10.6038 6.46149 10.6629 6.37869 10.7039 6.28669C10.7448 6.19469 10.7669 6.09538 10.7687 5.99468C10.7704 5.89397 10.7519 5.79394 10.7142 5.70056C10.6765 5.60717 10.6203 5.52233 10.5491 5.45112C10.4779 5.3799 10.3931 5.32375 10.2997 5.28603C10.2063 5.24831 10.1063 5.22979 10.0056 5.23156C9.90485 5.23334 9.80553 5.25538 9.71353 5.29637C9.62153 5.33736 9.53873 5.39647 9.47007 5.47015L3.47007 11.4702Z" fill="#0A2B49" fill-opacity="0.6"/>
</svg>

                    Вернуться назад</router-link>
            </div>
            <section class="banner">
                <div class="container">
                    <div class="title-block"><h1 class="title banner__title">Учебник русского языка для иностранцев «Привет, Россия!»</h1></div>
                    
                    <div class="banner__container">
                   
                    <div class="banner__content">
                        <div>
                      <p class="banner__text">22 ярких урока</p>
                    <p class="banner__text banner__text--rotate">571 упражнение</p>  
                    <p class="banner__level">*А1 + А2</p>
                    <p class="banner__programm"><span>готовая программа </span>для ваших студентов</p>  
                    <button class="banner__btn btn-reset">Купить учебник
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5302 13.4371C20.6706 13.2964 20.7495 13.1058 20.7495 12.9071C20.7495 12.7083 20.6706 12.5177 20.5302 12.3771L14.5302 6.37707C14.4615 6.30339 14.3787 6.24428 14.2867 6.20329C14.1947 6.1623 14.0954 6.14026 13.9947 6.13848C13.894 6.13671 13.794 6.15523 13.7006 6.19295C13.6072 6.23067 13.5224 6.28682 13.4511 6.35804C13.3799 6.42925 13.3238 6.51409 13.286 6.60748C13.2483 6.70086 13.2298 6.80089 13.2316 6.9016C13.2334 7.0023 13.2554 7.10161 13.2964 7.19361C13.3374 7.28561 13.3965 7.36841 13.4702 7.43707L18.1902 12.1571H4.00017C3.80126 12.1571 3.61049 12.2361 3.46984 12.3767C3.32919 12.5174 3.25017 12.7082 3.25017 12.9071C3.25017 13.106 3.32919 13.2968 3.46984 13.4374C3.61049 13.5781 3.80126 13.6571 4.00017 13.6571H18.1902L13.4702 18.3771C13.3965 18.4457 13.3374 18.5285 13.2964 18.6205C13.2554 18.7125 13.2334 18.8118 13.2316 18.9126C13.2298 19.0133 13.2483 19.1133 13.286 19.2067C13.3238 19.3001 13.3799 19.3849 13.4511 19.4561C13.5224 19.5273 13.6072 19.5835 13.7006 19.6212C13.794 19.6589 13.894 19.6774 13.9947 19.6757C14.0954 19.6739 14.1947 19.6518 14.2867 19.6109C14.3787 19.5699 14.4615 19.5108 14.5302 19.4371L20.5302 13.4371Z" fill="white"/>
                        </svg>
                    </button>
                    </div>
                    </div>
                    <picture>
                        <source srcset="img/books-1024.webp" media="(max-width:1024px)">
                        <img src="img/books.webp" alt="Картинка учебников">
                    </picture>
                    <button class="banner__btn banner__btn--phone btn-reset">Купить учебник
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5302 13.4371C20.6706 13.2964 20.7495 13.1058 20.7495 12.9071C20.7495 12.7083 20.6706 12.5177 20.5302 12.3771L14.5302 6.37707C14.4615 6.30339 14.3787 6.24428 14.2867 6.20329C14.1947 6.1623 14.0954 6.14026 13.9947 6.13848C13.894 6.13671 13.794 6.15523 13.7006 6.19295C13.6072 6.23067 13.5224 6.28682 13.4511 6.35804C13.3799 6.42925 13.3238 6.51409 13.286 6.60748C13.2483 6.70086 13.2298 6.80089 13.2316 6.9016C13.2334 7.0023 13.2554 7.10161 13.2964 7.19361C13.3374 7.28561 13.3965 7.36841 13.4702 7.43707L18.1902 12.1571H4.00017C3.80126 12.1571 3.61049 12.2361 3.46984 12.3767C3.32919 12.5174 3.25017 12.7082 3.25017 12.9071C3.25017 13.106 3.32919 13.2968 3.46984 13.4374C3.61049 13.5781 3.80126 13.6571 4.00017 13.6571H18.1902L13.4702 18.3771C13.3965 18.4457 13.3374 18.5285 13.2964 18.6205C13.2554 18.7125 13.2334 18.8118 13.2316 18.9126C13.2298 19.0133 13.2483 19.1133 13.286 19.2067C13.3238 19.3001 13.3799 19.3849 13.4511 19.4561C13.5224 19.5273 13.6072 19.5835 13.7006 19.6212C13.794 19.6589 13.894 19.6774 13.9947 19.6757C14.0954 19.6739 14.1947 19.6518 14.2867 19.6109C14.3787 19.5699 14.4615 19.5108 14.5302 19.4371L20.5302 13.4371Z" fill="white"/>
                        </svg>
                    </button>
                    
                    </div>
                </div>               
            </section>
            <section class="about">
                <div class="container">
                <div class="about__container">
                    <div class="about__left"></div>
                    <div class="about__right">
                        <h2 class="section-title">Об учебнике</h2>
                        <h3 class="section__subtitle">
                        <p class="about__text">В основе сюжета — жизнь и общение преподавателя русского языка и группы студентов из разных стран мира.</p>
                        <p class="about__text">Они начинают общаться онлайн, а затем студенты приезжают в Россию, посещают города и интересные места, знакомятся с разными людьми и продолжают изучение русского языка в России.</p>
                        <p class="about__text">Россия удивляет их разнообразием культурных традиций, особенностями жизни разных народов, природой и климатом.</p>
                        </h3>
                    </div>
                </div>
                <div class="about__cards">
                    <BookList :books="books"></BookList>
                </div>
                </div>
            </section>

            <section class="authors">
                <div class="container">
                    <div class="authors__container">                       
                        <div class="authors__content">
                            <h2 class="section-title">Авторы</h2>
                            <h3 class="authors__text">Авторы создали динамичный и занимательный учебник. Мы уверены, что герои наших уроков помогут преподавателям эффективно обучать иностранных студентов русскому языку и познакомят их с современной Россией и её особенностями.</h3>                                                 
                        </div>
                        <AuthorsSlider :authors="authors"/>
                    </div>
                </div>
            </section>

            <section class="cards">
                <div class="container">
                    <ul class="cards__num num list-reset">
                        <li class="num__item">
                            <p class="num__count">500&nbsp;+</p>
                            <p class="num__text">Упражнений</p>
                        </li>
                        <li class="num__item">
                            <p class="num__count">6&nbsp;000&nbsp;+</p>
                            <p class="num__text">Проданных учебников</p>
                        </li>
                        <li class="num__item">
                            <p class="num__count">5&nbsp;000&nbsp;+</p>
                            <p class="num__text">Педагогов уже занимаются</p>
                        </li>
                        <li class="num__item">
                            <p class="num__count">67&nbsp;+</p>
                            <p class="num__text">Стран пользователей</p>
                        </li>
                        <li class="num__item">
                            <p class="num__count">220&nbsp;+</p>
                            <p class="num__text">Академических часов</p>
                        </li>
                    </ul>

                    <div class="advantages__block">
                    <ul class="cards__advantages advantages list-reset">
                        <li class="advantages__item">
                            <p class="advantages__title">Увлекательность</p>
                            <p class="advantages__text">оригинальные иллюстрации и захватывающий сюжет в каждом уроке</p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__title">Удобство</p>
                            <p class="advantages__text">интерактивный онлайн и физический учебник</p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__title">Актуальность</p>
                            <p class="advantages__text">интересные факты и глубокое понимание современной России</p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__title">Уникальность</p>
                            <p class="advantages__text">интерактивный учебник с захватывающим сюжетом и неповторимыми героями</p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__title">Результат</p>
                            <p class="advantages__text">интерактивные задания и тестирование на каждом этапе обучения</p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__title">Практичность</p>
                            <p class="advantages__text">оптимизирует процесс обучения и экономит ваше время</p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__title">Методика</p>
                            <p class="advantages__text">объединены функциональная, интерактивная и коммуникативная методики РКИ</p>
                        </li>
                    </ul>
                    <ul class="cards__advantages advantages list-reset">
                        <li class="advantages__item">
                            <p class="advantages__title">Увлекательность</p>
                            <p class="advantages__text">оригинальные иллюстрации и захватывающий сюжет в каждом уроке</p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__title">Удобство</p>
                            <p class="advantages__text">интерактивный онлайн и физический учебник</p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__title">Актуальность</p>
                            <p class="advantages__text">интересные факты и глубокое понимание современной России</p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__title">Уникальность</p>
                            <p class="advantages__text">интерактивный учебник с захватывающим сюжетом и неповторимыми героями</p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__title">Результат</p>
                            <p class="advantages__text">интерактивные задания и тестирование на каждом этапе обучения</p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__title">Практичность</p>
                            <p class="advantages__text">оптимизирует процесс обучения и экономит ваше время</p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__title">Методика</p>
                            <p class="advantages__text">объединены функциональная, интерактивная и коммуникативная методики РКИ</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </section>

            <section class="game">
                <div class="container">
                    <h2 class="section-title game__title">Примеры заданий</h2>
                    <div class="game__container">
                        <div class="game__block game__left">
                            <div class="game__question">
                                <picture>
                                    <source srcset="img/game-1-1024.webp" media="(max-width:1600px)">
                                    <img src="img/game-1.webp" class=""> 
                                </picture>
                                
                                <div class="block_message">
                                    <p class="question-text">- Здра́́вствуйте! [здра́ствуйт'и]<br>
                                        Меня́ зову́т Ни́на Ива́новна.&nbsp;<br>
                                        Я преподава́тель. <br>А кто́ вы́? Ка́к ва́с зову́т?</p> 
                                        <div class="game__audio">
                                        <audio controls="controls">
                                            <source src="audio/1.mp3" type="audio/mpeg"> Тег audio не поддерживается вашим браузером. 
                                            <a href="audio/1.mp3">Скачайте музыку</a>.
                                        </audio>
                                        </div>
                                    </div>
                                    
                            </div>
                            <div class="game__question game__question--violet">
                                <picture>
                                    <source srcset="img/game-2-1024.webp" media="(max-width:1600px)">
                                    <img src="img/game-2.webp" class=""> 
                                </picture>
                            <div class="block_message">
                                <p class="question-text">- Меня́ зову́т Кла́ус.</p>
                            </div>
                            </div>
                            <div class="game__question">
                                <picture>
                                    <source srcset="img/game-1-1024.webp" media="(max-width:1600px)">
                                    <img src="img/game-1.webp" class=""> 
                                </picture>
                                <div class="block_message">
                                    <p class="question-text">- О́чень прия́тно.</p>
                                <div class="game__audio">
                                <audio controls="">
                                    <source src="audio/2.mp3" type="audio/mpeg"> Тег audio не поддерживается вашим браузером. 
                                    <a href="audio/2.mp3">Скачайте музыку</a>.
                                </audio>   
                                </div>                       
                            </div>
                            </div>
                            <div class="game__question game__question--violet">
                                <picture>
                                    <source srcset="img/game-2-1024.webp" media="(max-width:1600px)">
                                    <img src="img/game-2.webp" class=""> 
                                </picture>
                                <div class="block_message">
                                    <p class="question-text">- О́чень прия́тно.</p>
                                </div>
                            </div>


                        </div>
                        <div class="game__block game__top">
                         
                        <div class="game__question">
                            <div class="top-audio">
                              <span class="game__number">1</span>
                            <p class="question__title">Слушайте и отмечайте то, что слышите</p>  
                            </div>
                            
                            <div class="game__audio">
                            <audio controls="">
                                <source src="audio/3.mp3" type="audio/mpeg"> Тег audio не поддерживается вашим браузером.
                                <a href="audio/3.mp3">Скачайте музыку.</a>
                            </audio>
                            </div>
                        </div>
                        <div class="game__question">
                            <div class="game__box">
                                <p class="input-block">
                                    <label class="game__label">                                        
                                        <input type="checkbox" name="name1" class="failed game__input visually-hidden">
                                        <span class="game__checkbox"></span>
                                    </label>
                                    
                                    <label class="question-text">ты-ти</label>
                                    <label class="game__label">
                                        <input type="checkbox" name="name2" class="success game__input visually-hidden">
                                        <span class="game__checkbox"></span>
                                    </label>
                                    
                                </p>
                                <p class="input-block">
                                    <label class="game__label">
                                      <input type="checkbox" name="name3" class="failed game__input visually-hidden">
                                      <span class="game__checkbox"></span>  
                                    </label>
                                    
                                    <label class="question-text">ди-зи</label>
                                    <label class="game__label">
                                       <input type="checkbox" name="name4" class="success game__input visually-hidden">
                                       <span class="game__checkbox"></span> 
                                    </label>
                                    
                                </p>
                            </div>
                            <div class="game__box">
                                <p class="input-block">
                                    <label class="game__label">
                                       <input type="checkbox" name="name7" class="success game__input visually-hidden">
                                       <span class="game__checkbox"></span> 
                                    </label>
                                    
                                    <label class="question-text">вы-ви</label>
                                    <label class="game__label">
                                       <input type="checkbox" name="name8" class="failed game__input visually-hidden">
                                       <span class="game__checkbox"></span> 
                                    </label>
                                    
                                </p>
                                <p class="input-block">
                                    <label class="game__label">
                                        <input type="checkbox" name="name9" class="success game__input visually-hidden">
                                        <span class="game__checkbox"></span>
                                    </label>
                                    
                                    <label class="question-text" >ну-ню</label>
                                    <label class="game__label">
                                        <input type="checkbox" name="name10" class="failed game__input visually-hidden">
                                        <span class="game__checkbox"></span>
                                    </label>
                                    
                                </p>
                            </div>
                            <div class="game__box">
                                <p class="input-block">
                                    <label class="game__label">
                                       <input type="checkbox" name="name11" class="failed game__input visually-hidden">
                                       <span class="game__checkbox"></span> 
                                    </label>
                                    
                                    <label class="question-text">ма-мя</label>
                                    <label class="game__label">
                                      <input type="checkbox" name="name12" class="success game__input visually-hidden">
                                      <span class="game__checkbox"></span>  
                                    </label>
                                    
                                </p>
                                <p class="input-block">
                                    <label class="game__label">
                                      <input type="checkbox" name="name15" class="failed game__input visually-hidden">
                                      <span class="game__checkbox"></span>  
                                    </label>
                                    
                                    <label class="question-text">лэ-ле</label>
                                    <label class="game__label">
                                       <input type="checkbox" name="name16" class="success game__input visually-hidden">
                                       <span class="game__checkbox"></span> 
                                    </label>
                                    
                                </p>
                            </div>
                            <div class="game__box">
                                <p class="input-block">
                                    <label class="game__label">
                                       <input type="checkbox" name="name19" class="failed game__input visually-hidden">
                                       <span class="game__checkbox"></span> 
                                    </label>
                                    
                                    <label class="question-text">мам-мяч</label>
                                    <label class="game__label">
                                       <input type="checkbox" name="name20" class="success game__input visually-hidden">
                                       <span class="game__checkbox"></span> 
                                    </label>
                                    
                                </p>
                                <p class="input-block">
                                    <label class="game__label">
                                        <input type="checkbox" name="name21" class="success game__input visually-hidden">
                                        <span class="game__checkbox"></span>
                                    </label>
                                    
                                    <label class="question-text">мост-место</label>
                                    <label class="game__label">
                                      <input type="checkbox" name="name22" class="failed game__input visually-hidden">
                                      <span class="game__checkbox"></span>  
                                    </label>
                                    
                                </p>
                            </div>
                        </div>
                 
                        </div>
                        <div class="game__block game__middle">
                            <div class="block_question block_question3">
                        <div class="game__question">
                            <span class="game__number">3</span>
                            <p class="question__title">Посмотрите на рисунки. Вы видите лису с сыром или ворону с сыром? Лягушку или лошадь?</p>
                        </div>
                        <div class="game__images images flex">
                            <picture>
                                <source srcset="img/game-3-360.webp" media="(max-width:768px)">
                                <source srcset="img/game-3-1024.webp" media="(max-width:1024px)">
                                <img alt="Картинка лошади" class="images-1" src="img/game-3.webp">
                            </picture>
                            <picture>
                                <source srcset="img/game-4-360.webp" media="(max-width:768px)">
                                <source srcset="img/game-4-1024.webp" media="(max-width:1024px)">
                                <img alt="Картинка вороны с сыром" class="images-2" src="img/game-4.webp">
                            </picture>
                            
                        </div>
                    </div>
                        </div>
                        <div class="game__block game__bottom">
                            <div class="">
                        <div class="game__question">
                            <span class="game__number">2</span>
                            <p class="question__title">Составьте слова из этих букв и напишите их.</p>
                        </div>
                 
                            <div class="">
                                <div class="flex question">
                                    <div class="question__block flex">
                                        <picture>
                                            <source srcset="img/game-5-360.webp" media="(max-width: 768px)">
                                            <img alt="" pastename="img1" src="img/game-5.webp" class="question__img">
                                        </picture>
                                        
                                        <div class="game__words">
                                            <p class="">
                                                В
                                                <input class="imageText" id="img1" maxlength="2" type="text">
                                                А
                                            </p>
                                            <div class="game__audio">
                                            <audio controls="">
                                                <source src="audio/4.mpga" type="audio/mpeg"> 
                                                Тег audio не поддерживается вашим браузером.
                                                <a href="audio/4.mpga">Скачайте музыку.</a>
                                            </audio>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="question__block flex">
                                        <picture>
                                            <source srcset="img/game-7-360.webp" media="(max-width: 768px)">
                                            <img alt="" pastename="img1" src="img/game-7.webp" class="question__img">
                                        </picture>
                                        <div class="game__words">
                                            <p class="">
                                                В
                                                <input class="imageText" id="img2" maxlength="2" type="text">
                                                А
                                            </p>
                                            <div class="game__audio">
                                            <audio controls="">
                                                <source src="audio/5.mpga" type="audio/mpeg">
                                                 Тег audio не поддерживается вашим браузером.
                                                 <a href="audio/5.mpga">Скачайте музыку.</a>
                                                </audio>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                       
                                <div class="flex question">
                                    <div class="question__block flex">
                                        <picture>
                                            <source srcset="img/game-6-360.webp" media="(max-width: 768px)">
                                            <img alt="" pastename="img1" src="img/game-6.webp" class="question__img">
                                        </picture>
                                        <div class="game__words">
                                            <p class="">
                                                З
                                                <input class="imageText" id="img4" maxlength="2" type="text">
                                                Т
                                            </p>
                                            <div class="game__audio">
                                            <audio controls="">
                                                <source src="audio/6.mpga" type="audio/mpeg">
                                                 Тег audio не поддерживается вашим браузером.
                                                 <a href="audio/6.mpga">Скачайте музыку.</a>
                                                </audio>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="question__block flex">
                                        <picture>
                                            <source srcset="img/game-8-360.webp" media="(max-width: 768px)">
                                            <img alt="" pastename="img1" src="img/game-8.webp" class="question__img">
                                        </picture>
                                        <div class="game__words">
                                            <p class="">
                                                М
                                                <input class="imageText" id="img5" maxlength="3" type="text">
                                                З</p>
                                            <div class="game__audio">
                                            <audio controls="">
                                                <source src="audio/7.mpga" type="audio/mpeg">
                                                 Тег audio не поддерживается вашим браузером.
                                                 <a href="audio/7.mpga">Скачайте музыку.</a>
                                                </audio>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                     
                    </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="reviews">
                <div class="container">
                    <h2 class="section-title game__title">Отзывы учителей</h2>

                    <ReviewsSlider :reviews="reviews"></ReviewsSlider>
                </div>
            </section>


            <section class="faq">
                <div class="container">
                    <div class="faq__container">
                        <div class="faq__left">
                            <img src="img/faq.webp" alt="">
                        </div>
                        <div class="faq__right">
                            <FAQList></FAQList>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import BookList from '@/components/BookList.vue';
import AuthorsSlider from '@/components/AuthorsSlider.vue';
import ReviewsSlider from '@/components/ReviewsSlider.vue';
import FAQList from '@/components/FAQList.vue';
import router from '@/router';


    export default {
        name: 'BookPage',
        components: { Header, Footer, BookList, AuthorsSlider, ReviewsSlider, FAQList, router },
        data() {
            return {
                books: [
            {
                id: 1,
                name: 'Бумажный учебник',
                level: 'А1'
            },
            {
                id: 2,
                name: 'Онлайн-учебник',
                level: 'А1'
            },
            {
                id: 3,
                name: 'Бумажный учебник',
                level: 'А2'
            },
            {
                id: 4,
                name: 'Онлайн-учебник',
                level: 'А2'
            },
                ],

                authors: [
                    {
                        id: 1,
                        name: 'Нахабина Майя Михайловна',
                        info: 'Кандидат педагогических наук, доцент кафедры РЯиК, заслуженный преподаватель МГУ им. М.В. Ломоносова, ведущий теоретик учебника РКИ, создатель российской государственной системы тестирования РКИ',
                        url: 'img/author-1.webp'
                    },
                    {
                        id: 2,
                        name: 'Степаненко Вера Александровна',
                        info: 'Доктор педагогических наук, профессор Центр международного образования, Московский государственный областной университет',
                        url: 'img/author-2.webp'
                    },
                    {
                        id: 3,
                        name: 'Кольовска Елена Георгиевна',
                        info: 'Кандидат педагогических наук, доцент Центр международного образования, Московский государственный областной университет',
                        url: 'img/author-3.webp'
                    },
                    {
                        id: 4,
                        name: 'Плотникова Ольга Витальевна',
                        info: 'Магистр лингвистики, преподаватель в Дублинском университете, создатель портала «RKI.Today»',
                        url: 'img/author-4.webp'
                    },
                    {
                        id: 5,
                        name: 'Плотникова Ольга Витальевна',
                        info: 'Магистр лингвистики, преподаватель в Дублинском университете, создатель портала «RKI.Today»',
                        url: 'img/author-4.webp'
                    },
                    {
                        id: 6,
                        name: 'Плотникова Ольга Витальевна',
                        info: 'Магистр лингвистики, преподаватель в Дублинском университете, создатель портала «RKI.Today»',
                        url: 'img/author-4.webp'
                    },
                ],

                reviews: [
                    {
                        id: 1,
                        name: 'Канарский Кирилл',
                        review: '',
                        info: 'Польша, Директор языковой школы XYZ',
                        image: 'img/review-1.webp',
                        tablet: 'img/review-1-1024.webp',
                        video: '',                 
                    }, 
                    {
                        id: 2,
                        name: 'Карпенко Марина',
                        review: '',
                        info: 'Италия, Преподаватель РКИ',
                        image: 'img/review-2.webp',
                        tablet: 'img/review-2-1024.webp',
                        video: '',                 
                    }, 
                    {
                        id: 3,
                        name: 'Кроер Юлиана',
                        review: '',
                        info: 'Австрия, Преподаватель РКИ',
                        image: 'img/review-3.webp',
                        tablet: 'img/review-3-1024.webp',
                        video: '',                 
                    }, 
                    {
                        id: 4,
                        name: 'Милова Светлана ',
                        review: '',
                        info: 'Турция, Преподаватель курсов РКИ',
                        image: 'img/review-4.webp',
                        tablet: 'img/review-4-1024.webp',
                        video: '',                 
                    }, 
                    {
                        id: 5,
                        name: 'Милова Светлана ',
                        review: '',
                        info: 'Турция, Преподаватель курсов РКИ',
                        image: 'img/review-4.webp',
                        tablet: 'img/review-4-1024.webp',
                        video: '',                 
                    }, 
                    {
                        id: 6,
                        name: 'Милова Светлана ',
                        review: '',
                        info: 'Турция, Преподаватель курсов РКИ',
                        image: 'img/review-4.webp',
                        tablet: 'img/review-4-1024.webp',
                        video: '',                 
                    }, 
                ],

              
            }
        },
       
        
    }
</script>

<style>
    body {
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
    }

    h3 {
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
    }

    @media (max-width: 1400px) {
        body {
        font-size: 16px;
    }

        .title {
            margin-bottom: 40px;
        }

        h3 {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
    }
    }

</style>

