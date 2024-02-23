export default function useNumberHelper() {
  const round = (number) => {
    return Math.round(number)
  }

  return { round }
}
