<template>
  <div class="service_item__wrap">
    <div class="service_item__label">
        <span
            v-for="item of serviceName"
            @click="emit('changeServiceTabs',item)"
            class="service_item"
            :class="{active_tab: item.name === props.selected_service.name}"
        >
          {{ item.label }}
        </span>
      <div class="">

      </div>


      <!--      <div class="horizontal-scroll service_item_mob">
              <ul class="scrollable-list service_item_mob">
                <li v-for="(item,index ) of serviceName"
                    :key="index"
                    :class="{active_tab: item.name === props.selected_service.name}"
                    @click="emit('changeServiceTabs',item)"
                >
                  {{ item.label }}
                </li>
              </ul>
            </div>-->
    </div>
  </div>

</template>
<script setup>


const props = defineProps({
  serviceName: {
    type: Array,
    required: true,
  },
  selected_service: {
    type: Object,
    required: true,
  }
})
const emit = defineEmits(["changeServiceTabs"])
/*Slick slider */

const items = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
  { id: 4, text: 'Item 4' },
  { id: 5, text: 'Item 5' },
];
</script>
<style scoped>
.active_tab {
  text-decoration: underline;
}

/* Стили для листающегося списка по горизонтали */
.horizontal-scroll {
  overflow-x: auto; /* Добавляет горизонтальную полосу прокрутки при необходимости */
}

.scrollable-list {
  white-space: nowrap; /* Предотвращает перенос текста на новую строку */
  padding: 10px; /* Добавляет отступы вокруг списка */
}

.scrollable-list li {
  display: inline-block; /* Размещает элементы списка в ряд */
  margin-right: 8px; /* Отступ между элементами списка */
}

.slider-item {
  text-align: center;
  padding: 20px;
  background: #ddd;
}
</style>
