<template>
    <div class="modal offer">
        <div class="modal__overlay">
            <div class="modal__window">
                <button class="modal__close btn-reset"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M37.5 2.5L2.5 37.5" stroke="#0A2B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.5 2.5L37.5 37.5" stroke="#0A2B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                <ul class="offer__tabs tabs list-reset">
                    <li :class="{active: activeTab == tab.name}" v-for="tab in tabs" :key="tab.id" class="tabs__item">
                        <a href="" class="tabs__link">{{ tab.name }}</a>
                    </li>
                </ul>
                <Form @InvalidSubmit="onInvalidSubmit" class="offer__form form">
                    <div class="form__information information">
                        <div class="information__left">
                            <label for="" class="form__label">
                                <span class="form__text">Ф.И.О *</span>
                                <button class="modal__btn hidden" @click.prevent="clearInput"></button>
                                <span v-show="errorFio" class="error-icon"></span>
                                <Field :class="{error: errorFio}" class="form__input" name="fio" v-model="fio" type="text" placeholder="Введите Ф.И.О" :rules="validateFio" @input="inputChange" @keydown="deleteNumber"/>
                                <ErrorMessage class="form__error" name="fio" />
                            </label>
                            <label for="" class="form__label">
                                <span class="form__text">Должность</span>
                                <button class="modal__btn hidden" @click.prevent="clearInput"></button>
                                <input class="form__input" name="job" v-model="job" type="text" placeholder="Введите должность" @input="inputChange" @keydown="deleteNumber"/>                                
                            </label>
                            
                            <label for="" class="form__label">
                                <span class="form__text">Название новости *</span>
                                <button class="modal__btn hidden" @click.prevent="clearInput"></button>
                                <span v-show="errorFio" class="error-icon"></span>
                                <Field :class="{error: errorFio}" class="form__input" name="fio" v-model="fio" type="text" placeholder="Введите название" :rules="validateFio" @input="inputChange" @keydown="deleteNumber"/>
                                <ErrorMessage class="form__error" name="fio" />
                            </label>

                            <label for="" class="form__label">
                                <span class="form__text">Вставьте ссылку на Вашу видеоновость</span>
                                <button class="modal__btn hidden" @click.prevent="clearInput"></button>
                                <input class="form__input" name="job" v-model="job" type="text" placeholder="Ссылка на ваш видеоматериал" @input="inputChange" @keydown="deleteNumber"/>                                
                            </label>
                        </div>
                        <div class="information__right">
                            <label for="" class="form__label">
                                <span class="form__text">Описание новости *</span>
                                <button class="modal__btn hidden" @click.prevent="clearInput"></button>
                                <span v-show="errorFio" class="error-icon"></span>
                                <Field as="textarea" :class="{error: errorFio}" class="form__input" name="fio" v-model="fio" type="field" placeholder="Введите описание" :rules="validateFio" @input="inputChange" @keydown="deleteNumber"/>
                                <ErrorMessage class="form__error" name="fio" />
                            </label>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage   } from 'vee-validate';
    export default {
        components: {Form, Field, ErrorMessage},
        data() {
            return {
                activeTab: 'Информация',
                tabs: [
                    {
                        id: 1,
                        name: 'Информация'
                    },

                    {
                        id: 2,
                        name: 'Проверка'
                    },

                ],

                fio: '',
                job: '',
                errorFio: false,
                errorJob: false
            }
        },

        methods: {
            clearInput(e) {
                e.target.classList.add('hidden');
                console.log(e.target.nextSibling.nextSibling)
                if (e.target.nextSibling.nextSibling.getAttribute('name') == 'fio')  {
                    this.fio = '';
                    this.errorFio = true
                }
                if (e.target.nextSibling.nextSibling.getAttribute('name') == 'job')  {
                    this.country = '';
                    this.errorJob = true
                }

                // if (e.target.nextSibling.nextSibling.getAttribute('name') == 'email')  {
                //     this.email = '';
                //     this.errorEmail = true
                // }        
            },

            inputChange(e) {
                const btn = e.target.previousSibling.previousSibling;
                if (e.target.getAttribute('name') == 'fio') {
                        this.errorFio = false
                    }


                if (e.target.value != '') {
                    btn.classList.remove('hidden') 

                } else btn.classList.add('hidden') 

            },

            validateFio(value) {
                if (!value) {
                     return 'Введите Ф.И.О';
                }

                return true;
            },

            deleteNumber(e) {
                if( e.key.match(/[0-9]/) ) return e.preventDefault();
            },

            onInvalidSubmit(e) {
                // if (e.errors.fio) {
                //     this.errorFio = true
                // }

                // if (e.errors.job) {
                //     this.errorCountry = true
                // }

                // if (e.errors.email) {
                //     this.errorEmail = true
                // }
            },
        }
    }
</script>
