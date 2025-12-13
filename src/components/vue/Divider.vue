<script setup lang="ts">
// https://github.com/joe-bell/cva/blob/main/examples/latest/vue/src/components/Button.vue
type DividerColor = 'gray-420' | 'gray-536' | 'black';

type Props = {
  color?: DividerColor;
  className?: string;
};

const { color = 'gray-420', className } = defineProps<Props>();
</script>

<template>
  <hr
    :class="[
      {
        'border-solid-gray-420': color === 'gray-420',
        'border-solid-gray-536': color === 'gray-536',
        'border-solid-black': color === 'black',
      },
      className
    ]"
    :data-color="color"
  />
</template>