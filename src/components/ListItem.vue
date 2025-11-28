<script setup>
import {ref} from 'vue'

defineProps({
  name: String,
  bought: Boolean,
})

const count = ref(0)
</script>

<template>
  <div
      class="flex items-center justify-between p-4 border border-gray-800 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group"
  >
    <span :class="{ 'line-through text-gray-500': bought, 'text-gray-200': !bought }">
      {{ name }}
    </span>
    <div class="relative flex items-center">
      <input
          type="checkbox"
          :checked="bought"
          class="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-600 bg-gray-700 transition-all checked:border-orange-500 checked:bg-orange-500 hover:border-orange-400 focus:ring-2 focus:ring-orange-500/30 focus:ring-offset-0"
      />
      <i class="material-icons absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base text-white opacity-0 pointer-events-none peer-checked:opacity-100">check</i>
    </div>
  </div>
</template>
