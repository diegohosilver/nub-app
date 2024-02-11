import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWeatherStore = defineStore('weather', () => {
  const location = ref('')
  const temperature = ref(null)
  const status = ref(null)
  const high = ref(null)
  const low = ref(null)
  const ttl = ref(new Date().getTime())

  function setWeather(weather) {
    location.value = weather.location.name
    temperature.value = weather.current.temp_c
    status.value = weather.current.condition.text
    high.value = weather.forecast.forecastday[0].day.maxtemp_c
    low.value = weather.forecast.forecastday[0].day.mintemp_c

    let now = new Date()

    ttl.value = now.setMinutes(now.getMinutes() + 15)
  }

  return { location, temperature, status, high, low, ttl, setWeather }
})
