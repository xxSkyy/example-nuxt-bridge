<script lang="ts" setup>
import { useTestStore } from '~~/stores/test'

const store = useTestStore()
</script>

<template>
  <div class="flex flex-col gap-y-2 items-center">
    <div class="text-red-500">Welcome</div>
    <div v-if="!store.name" class="text-violet-600">(your name)</div>
    <div
      v-else
      class="text-violet-600 font-bold"
      data-testid="name"
    >{{ store.name }}</div>
    <div class="text-blue-500">It's</div>
    <div class="text-yellow-500">Colored</div>
    <div class="text-green-500">Text</div>
    <div class="mt-8 text-center">
      <input
        type="text"
        data-testid="input"
        v-model="store.name"
        placeholder="Your name"
        class="bg-dark-800 border border-dark-300"
      />
      <div class="text-xs">Type your name here</div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
</style>