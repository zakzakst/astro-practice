<script setup lang="ts">
  import { ref, computed } from 'vue';
  import EmitChild from './EmitChild.vue'
  type Member = {
    id: number
    name: string
    email: string
    points: number
    note?: string
  }
  const memberListInit = new Map<number, Member>()
  memberListInit.set(33456, {
    id: 33456,
    name: '田中太郎',
    email: 'bow@example.com',
    points: 35,
    note: '初回入会特典あり。',
  })
  memberListInit.set(47783, {
    id: 47783,
    name: '鈴木次郎',
    email: 'mue@example.com',
    points: 53,
  })
  const memberList = ref(memberListInit)
  const totalPoints = computed(
    (): number => {
      return [...memberList.value.values()].reduce((acc, current) => acc + current.points, 0)
    }
  )
  const onIncrementPoint = (id: number): void => {
    const member = memberList.value.get(id)
    if (member !== undefined) {
      member.points++
    }
  }
</script>

<template>
  <section>
    <h1>会員リスト</h1>
    <p>全会員の保有ポイントの合計: {{ totalPoints }}</p>
    <EmitChild
      v-for="[id, member] in memberList"
      :key="id"
      :id="id"
      :name="member.name"
      :email="member.email"
      :points="member.points"
      :note="member.note"
      v-on:increment-point="onIncrementPoint"
    />
  </section>
</template>