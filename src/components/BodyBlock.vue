<script setup>
import SearchBox from './SearchBox.vue'
import CurrentWeather from './CurrentWeather.vue'
import WeatherLoading from './WeatherLoading.vue'
import FutureForecast from './FutureForecast.vue'
import useWeather from '@/composables/weather'
import useLocation from '@/composables/location'
import { ref, onMounted } from 'vue'
import { useWeatherStore } from '@/stores/weather'
import { storeToRefs } from 'pinia'

const store = useWeatherStore()
const { ttl } = storeToRefs(store)

const { weather, getWeather } = useWeather()
const { position, getPosition, positionToString } = useLocation()

const isLoading = ref(true)
let searchLocation = ''

async function searchWeather() {
  let lookup = searchLocation.length ? searchLocation : positionToString()

  await getWeather(lookup, 3)
  store.setWeather(weather.value)
}

async function onSearch(e) {
  searchLocation = e

  let task = async () => {
    if (!searchLocation.length) {
      await loadData()
    } else {
      await searchWeather()
    }
  }

  await loadingWrapper(task)
}

async function loadData() {
  await getPosition()

  if (ttl.value < new Date().getTime() && (searchLocation.length || position.value != null)) {
    await searchWeather()
  }
}

async function onVisibilityChange() {
  if (!document.hidden) {
    await loadData()
  }
}

async function loadingWrapper(task) {
  isLoading.value = true

  await task()

  isLoading.value = false
}

document.addEventListener('visibilitychange', onVisibilityChange)

onMounted(async () => {
  await loadingWrapper(loadData)
})
</script>

<template>
  <SearchBox @search="onSearch"></SearchBox>
  <template v-if="isLoading">
    <WeatherLoading></WeatherLoading>
  </template>
  <template v-else>
    <CurrentWeather></CurrentWeather>
    <FutureForecast></FutureForecast>
  </template>
</template>
