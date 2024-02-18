import { ref } from 'vue'

export default function useLocation() {
  const position = ref(null)

  const getPosition = async () => {
    let result = await new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((p) => {
        resolve(p)
      })
    })

    position.value = result
  }

  const positionToString = () => {
    return `${position.value?.coords?.latitude}, ${position.value?.coords?.longitude}`
  }

  return { position, getPosition, positionToString }
}
