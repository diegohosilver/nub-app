<script setup>
import { useWeatherStore } from '@/stores/weather'
import { storeToRefs } from 'pinia'
import useNumberHelper from '@/helpers/number'

const store = useWeatherStore()
const { location, temperature, status, high, low } = storeToRefs(store)

const { round } = useNumberHelper()
</script>

<template>
  <div class="current-weather">
    <h2 class="current-weather--location">{{ location }}</h2>

    <h1 class="current-weather--temperature">{{ round(temperature) }}</h1>

    <h2 class="current-weather--status">{{ status }}</h2>

    <div class="current-weather--limits">
      <label>H: {{ round(high) }}</label>

      <label>L: {{ round(low) }}</label>
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
