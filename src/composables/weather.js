import { ref } from 'vue'
import axios from 'axios'

export default function useWeather() {
  const weather = ref(null)

  const key = import.meta.env.VITE_WEATHER_API_KEY

  const getWeather = async (q, days = 5, aqi = 'no', alerts = 'no') => {
    let response = await axios.get('https://api.weatherapi.com/v1/forecast.json', {
      params: { key, q, aqi, alerts, days }
    })

    weather.value = response.data
  }

  return { weather, getWeather }
}
