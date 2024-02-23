import moment from 'moment'

export default function useDateHelper() {
  const getRelativeDate = (date) => {
    if (isToday(date)) return 'Today'

    if (isTomorrow(date)) return 'Tomorrow'

    return day(date)
  }

  const isToday = (date) => {
    return moment(date).isSame(moment(), 'day')
  }

  const isTomorrow = (date) => {
    const tomorrowDate = moment().add(1, 'days')
    return moment(date).isSame(tomorrowDate, 'day')
  }

  const day = (date) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    let number = moment(date).day()

    return days[number]
  }

  return { getRelativeDate }
}
