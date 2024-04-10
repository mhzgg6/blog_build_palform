<template>
  <div class="box">1</div>
</template>

<script setup>
import {} from "vue"
console.log(1111)
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  color: $fontColorForPc;
  padding: $padding_1;
  @include background-theme("main");
}
</style>
