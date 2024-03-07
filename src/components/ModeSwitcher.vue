<script setup>
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
import { useModeStore } from '@/stores/mode'
import { storeToRefs } from 'pinia'

const store = useModeStore()
const { mode } = storeToRefs(store)

function switchMode() {
  store.switchMode()
  document.body.classList.toggle('dark-mode')
}
</script>

<template>
  <div class="mode-switcher" @click="switchMode">
    <SunIcon v-if="mode == 'dark'" />
    <MoonIcon v-if="mode == 'light'" />
  </div>
</template>

<style scoped>
.mode-switcher {
  width: 24px;
  margin-right: 12px;
}
</style>
