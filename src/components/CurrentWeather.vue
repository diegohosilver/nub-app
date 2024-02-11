<script setup>
import { useWeatherStore } from '@/stores/weather'
import { storeToRefs } from 'pinia'

const store = useWeatherStore()
const { location, temperature, status, high, low } = storeToRefs(store)
</script>

<template>
  <div class="current-weather">
    <h2 class="current-weather--location">{{ location }}</h2>

    <h1 class="current-weather--temperature">{{ temperature }}</h1>

    <h2 class="current-weather--status">{{ status }}</h2>

    <div class="current-weather--limits">
      <label>H: {{ high }}</label>

      <label>L: {{ low }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.current-weather {
  display: flex;
  flex-direction: column;
  align-items: center;

  &--limits {
    display: flex;
    justify-content: space-between;
    width: 150px;
  }
}
</style>
