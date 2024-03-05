<template>
  <v-create-material v-if="createMaterial"
                     @closemodal="createMaterial=!createMaterial">
  </v-create-material>
  <div class="container " v-if="!createMaterial">
    <Header/>
    <h4 class="service_title">{{ (selectedService.title) ? selectedService.title :selectedService.label }}</h4>
    <div class="flex serv">
      <div class="service_item_mob">
        <v-service-tabs :service-name="serviceName"
                        :selected_service="selectedService"
                        @changeServiceTabs="changeServiceName"/>
      </div>
      <div class="service_wrap ">
        <p class="service_nav_title">Сервисы РКИ</p>
        <v-service-tabs
            :service-name="serviceName"
            :selected_service="selectedService"
            @changeServiceTabs="changeServiceName"
        >
        </v-service-tabs>
      </div>
      <div class="service_wrap_second">
        <div class="" v-if="selectedService.name==='Material'">
          <v-material
              @openModal="createMaterial = !createMaterial">
          </v-material>
        </div>
        <div class="" v-if="selectedService.name==='Game'">
          <v-game/>
        </div>
        <div class="test_box__wrap" v-if="selectedService.name==='Tests'">
          <test v-for="item of tests"
                :nameTest="item" :key="item.id"
          >
          </test>
        </div>
        <div class="" v-if="selectedService.name==='Teacher'">Teacher</div>
        <div class="" v-if="selectedService.name==='Vacancy'">Vacancy</div>
        <div class="" v-if="selectedService.name==='Course'">Course</div>
      </div>
    </div>
  </div>
  <Footer v-if="!createMaterial"/>
</template>
<script setup>
import VServiceTabs from "@/components/v-service-tabs.vue";
import {ref} from "vue";
import Test from "@/components/v-test.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import VMaterial from "@/components/v-material.vue";
import VCreateMaterial from "@/components/v-create-material.vue";
import VGame from "@/components/v-game.vue";


const changeServiceName = (serviceName) => {
  selectedService.value = serviceName

}
const createMaterial = ref(false)
const serviceName = [
  {name: 'Material', label: 'Учебно-методические материалы',},
  {name: 'Game', label: 'Игра', title: 'Игра РКИ онлайн'},
/*
  {name: 'Tests', label: 'Тесты'},
*/
  {name: 'Kalinka', label: 'Kalinka - Russian Fast & Easy'},
 /* {name: 'Course', label: 'Курсы'},
  {name: 'Teacher', label: 'База учителей'},
  {name: 'Vacancy', label: 'Вакансии'},*/

]
const tests = ref([
  {id: 1, name: 'Уровень A1', image: '../img/tests/a1.svg'},
  {id: 2, name: 'Уровень A2', image: '../img/tests/a2.svg'},
  {id: 3, name: 'Уровень B1', image: '../img/tests/b1.svg'},
  {id: 4, name: 'Уровень B2', image: '../img/tests/b2.svg'},
  {id: 5, name: 'Уровень C1', image: '../img/tests/c1.svg'},
])
const selectedService = ref({name: 'Material', label: 'Учебно-методические материалы'})
</script>
<style scoped>

</style>
