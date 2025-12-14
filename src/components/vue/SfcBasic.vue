<script setup lang="ts">
  import { ref, computed } from 'vue'
  const widthInit = Math.round(Math.random() * 10)
  const heightInit = Math.round(Math.random() * 10)
  const width = ref(widthInit)
  const height = ref(heightInit)
  const area = computed(
    (): number => {
      return width.value * height.value
    }
  )
  setInterval(
    (): void => {
      width.value = Math.round(Math.random() * 10)
      height.value = Math.round(Math.random() * 10)
    },
    1000
  )
</script>

<template>
  <p>縦{{ height }}で横が{{ width }}の長方形の面積は{{ area }}</p>
</template>