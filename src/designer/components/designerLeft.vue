<template>
  <div class="designer-left-warp">
    <el-collapse v-model="activeName" @change="handleChange">
      <el-collapse-item v-for="item in widgetsConfigs" :key="item.id" :title="item.title" :name="item.type">
        <vue-draggable
          v-model="widgetsConfigs"
          class="widget-content"
          :sort="false"
          target=".widget-warp"
          @start="onStart"
          @update="onUpdate"
        >
          <ul class="widget-warp">
            <li v-for="widget in item.items" :key="widget.id" class="widget-info">
              {{ widget.name }}
            </li>
          </ul>
        </vue-draggable>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { VueDraggable } from "vue-draggable-plus"
import widgetsConfigs from "../../utils/widgetsConfig"

const activeName = ref(["container", "form"])
const handleChange = (val: string[]) => {
  console.log(val)
}
console.log(widgetsConfigs)

const onStart = (e) => {
  console.log(e)
}

const onUpdate = (e) => {
  console.log(e)
}

</script>

<style scoped>

</style>
