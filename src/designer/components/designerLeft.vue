<template>
  <div class="designer-left-warp">
    <el-collapse v-model="activeName" @change="handleChange">
      <el-collapse-item v-for="item in widgetsConfigs" :key="item.id" :title="item.title" :name="item.type">
        <ul class="widget-warp">
          <li v-for="widget in item.items" :key="widget.id" class="widget-info">
            {{ widget.name }}
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import widgetsConfigs from "../../utils/widgetsConfig"

const activeName = ref(["container", "form"])
const handleChange = (val: string[]) => {
  console.log(val)
}
console.log(widgetsConfigs)
</script>

<style scoped>

</style>
