<template>
  <div class="service_item__wrap">
    <div class="service_item__label">
  <span
      v-for="item of serviceName"
      @click="emit('changeServiceTabs',item)"
      class="service_item"
      :class="{active_tab: item.name === selected_service.name}"
  >
    {{ item.label }}
  </span>
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


</script>
<style scoped>
.active_tab{
  text-decoration: underline;
}
</style>
