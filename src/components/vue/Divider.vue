<script setup lang="ts">
type DividerColor = 'gray-420' | 'gray-536' | 'black';

type Props = {
  color?: DividerColor;
};

const { color } = defineProps<Props>()
</script>

<template>
  <hr
    class="data-[color=gray-420]:border-solid-gray-420 data-[color=gray-536]:border-solid-gray-536 data-[color=black]:border-black"
    :data-color={color}
  />
</template>