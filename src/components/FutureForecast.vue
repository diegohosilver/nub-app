<script setup>
import { useWeatherStore } from '@/stores/weather'
import { storeToRefs } from 'pinia'
import useNumberHelper from '@/helpers/number'
import useDateHelper from '@/helpers/date'

const store = useWeatherStore()
const { forecast } = storeToRefs(store)

const { round } = useNumberHelper()
const { getRelativeDate } = useDateHelper()
</script>

<template>
  <div class="future-forecast">
    <h3>5-day forecast</h3>

    <div v-for="item in forecast" :key="item.date" class="future-forecast-item">
      <img class="future-forecast-item--icon" :src="item.icon" />

      <p class="future-forecast-item--date">{{ getRelativeDate(item.date) }}</p>

      <div class="future-forecast-item--limits">
        <label>{{ round(item.high) }}</label> -
        <label>{{ round(item.low) }}</label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.future-forecast {
  margin-left: 12px;
  margin-right: 12px;

  &-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    &--icon {
      width: 24px;
      height: 24px;
    }

    &--date {
      margin-left: 16px;
    }

    &--limits {
      margin-left: auto;
      display: flex;
      justify-content: space-between;
      width: 90px;
    }
  }
}
</style>
