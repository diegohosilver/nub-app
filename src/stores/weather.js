import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWeatherStore = defineStore('weather', () => {
  const location = ref('')
  const temperature = ref(null)
  const status = ref(null)
  const high = ref(null)
  const low = ref(null)
  const icon = ref(null)
  const ttl = ref(new Date().getTime())
  const forecast = ref(null)

  function setWeather(weather) {
    location.value = weather.location.name
    temperature.value = weather.current.temp_c
    status.value = weather.current.condition.text
    high.value = weather.forecast.forecastday[0].day.maxtemp_c
    low.value = weather.forecast.forecastday[0].day.mintemp_c
    icon.value = weather.current.condition.icon

    let now = new Date()

    ttl.value = now.setMinutes(now.getMinutes() + 15)

    let map = mapForecast(weather.forecast.forecastday)

    forecast.value = map
  }

  function mapForecast(forecast) {
    let items = forecast.map((f) => {
      return {
        date: f.date,
        condition: f.day.condition.text,
        icon: f.day.condition.icon,
        high: f.day.maxtemp_c,
        low: f.day.mintemp_c
      }
    })

    return items
  }

  return { location, temperature, status, high, low, ttl, forecast, setWeather }
})
