<template>
  <div class="designer-container">
    <div class="designer-container-warp">
      <vue-draggable
        v-model="proxyWidgets"
        class="widget-content"
        :sort="false"
        target=".widget-warp"
        @start="onStart"
        @update="onUpdate"
      >
        <component :is="getWidgetName()"></component>
      </vue-draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { VueDraggable } from "vue-draggable-plus"

const proxyWidgets = ref([])

const getWidgetName = (name) => {
  return ''
}

const onStart = (e) => {
  console.log(e)
}

const onUpdate = (e) => {
  console.log(e)
}
</script>

<style scoped></style>