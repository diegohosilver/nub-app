<script setup>
import SearchBox from './SearchBox.vue'
import CurrentWeather from './CurrentWeather.vue'
import WeatherLoading from './WeatherLoading.vue'
import useWeather from '@/composables/weather'
import { ref } from 'vue'
import { useWeatherStore } from '@/stores/weather'
import { storeToRefs } from 'pinia'

const store = useWeatherStore()
const { ttl } = storeToRefs(store)

const { weather, getWeather } = useWeather()

const isLoading = ref(true)
let searchLocation = ''

async function onSearch(e) {
  if (!e.length) {
    return
  }
  searchLocation = e
  await searchWeather()
}

async function searchWeather() {
  isLoading.value = true
  await getWeather(searchLocation, 4)
  store.setWeather(weather.value)
  isLoading.value = false
}

document.addEventListener('visibilitychange', async function () {
  if (!document.hidden) {
    if (ttl.value < new Date().getTime() && searchLocation.length) {
      await searchWeather()
    }
  }
})
</script>

<template>
  <SearchBox @search="onSearch"></SearchBox>
  <template v-if="isLoading">
    <WeatherLoading></WeatherLoading>
  </template>
  <template v-else>
    <CurrentWeather></CurrentWeather>
  </template>
</template>
