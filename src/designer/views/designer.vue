<template>
  <section class="mhz-designer">
    <mhzDesignerIframe>
      <template #top>
        <mhzDesignerHead></mhzDesignerHead>
      </template>

      <mhzDesignerContainer></mhzDesignerContainer>

      <template #left>
        <mhzDesignerLeft></mhzDesignerLeft>
      </template>
    </mhzDesignerIframe>
  </section>
</template>
<script setup lang="ts">
import mhzDesignerIframe from "../components/designerIframe.vue"
import mhzDesignerHead from "../components/designerHead.vue"
import mhzDesignerLeft from "../components/designerLeft.vue"
import mhzDesignerContainer from "../components/designerContainer.vue"

</script>

<style scoped>

</style>
