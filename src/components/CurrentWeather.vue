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
    <h2>{{ location }}</h2>

    <h1>{{ round(temperature) }}</h1>

    <h2>{{ status }}</h2>

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

  h1,
  h2 {
    font-weight: bold;
  }
}
</style>
