<template>
  <div class="designer-iframe">
    <div class="designer-head">
      <slot name="top"></slot>
    </div>

    <div class="designer-content">
      <div class="designer-center">
        <div class="designer-left">
          <slot name="left"></slot>
        </div>

        <div class="designer-main">
          <slot></slot>
        </div>

        <div class="designer-right">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import mhzDesignerLeft from "../components/designerLeft.vue"
</script>

<style scoped></style>
