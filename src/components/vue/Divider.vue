<script setup lang="ts">
import clsx from 'clsx';
type DividerColor = 'gray-420' | 'gray-536' | 'black';

type Props = {
  color?: DividerColor;
  className?: string;
};

const { color = 'gray-420', className } = defineProps<Props>();
</script>

<template>
  <hr
    :class="clsx(
      color === 'gray-420' && 'border-solid-gray-420',
      color === 'gray-536' && 'border-solid-gray-536',
      color === 'black' && 'border-solid-black',
      className,
    )"
    :data-color="color"
  />
</template>