import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModeStore = defineStore('mode', () => {
  const mode = ref('light')

  function switchMode() {
    mode.value = mode.value == 'light' ? 'dark' : 'light'
  }

  return { mode, switchMode }
})
