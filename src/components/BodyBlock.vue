<script setup>
import SearchBox from './SearchBox.vue'
import CurrentWeather from './CurrentWeather.vue'
import WeatherLoading from './WeatherLoading.vue'
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

async function onSearch(e) {
  if (!e.length) {
    return
  }
  searchLocation = e
  await searchWeather()
}

async function searchWeather() {
  isLoading.value = true

  let lookup = searchLocation.length ? searchLocation : positionToString()

  await getWeather(lookup, 4)
  store.setWeather(weather.value)
  isLoading.value = false
}

document.addEventListener('visibilitychange', async function () {
  if (!document.hidden) {
    await init()
  }
})

async function init() {
  await getPosition()

  if (ttl.value < new Date().getTime() && (searchLocation.length || position.value != null)) {
    await searchWeather()
  }
}

onMounted(async () => {
  await init()
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
