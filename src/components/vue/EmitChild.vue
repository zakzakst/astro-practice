<script setup lang="ts">
  import { ref, computed } from 'vue';
  type Props = {
    id: number
    name: string
    email: string
    points: number
    note?: string
  }
  type Emits = {
    incrementPoint: [id: number]
  }
  const { id, name, email, points, note } = defineProps<Props>()
  const emit = defineEmits<Emits>()
  // const localPoints = ref(points)
  const localNote = computed(
    (): string => {
      return note || '--'
    }
  )
  const pointUp = (): void => {
    // localPoints.value++
    emit('incrementPoint', id)
  }
</script>

<template>
  <section>
    <h4>{{ name }}さんの情報</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ email }}</dd>
      <dt>保有ポイント</dt>
      <!-- <dd>{{ localPoints }}</dd> -->
      <dd>{{ points }}</dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
    <button v-on:click="pointUp">ポイント加算</button>
  </section>
</template>