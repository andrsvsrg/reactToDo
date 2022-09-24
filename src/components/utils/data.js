import moment from 'moment'

export const monthNamesArr = moment()._locale._months

export function isSelectedDay(dayObj, selectedDay) {
  return dayObj.id === selectedDay
}
export function startWeekFromMonday() {
  moment.updateLocale('en', { week: { dow: 1 } })
}

export function getTodayDayId() {
  return moment().format('DDMMYYYY')
}

export function getCurrentYear() {
  return moment().year()
}

export function getCurrentMonth() {
  return moment().month()
}

export const isWeekend = (momentDay) => {
  return momentDay.isoWeekday() === 6 || momentDay.isoWeekday() === 7
}

export function getDayOfMonth(momentDay) {
  return momentDay.date()
}

export function getMonthOfYear(momentDay) {
  return momentDay.month() + 1
}

export function getYear(momentDay) {
  return momentDay.year()
}

export function isCurrentMonth(momentDay, selectMonth) {
  return momentDay.month() === selectMonth
}

export function getId(momentDay) {
  return momentDay.format('DDMMYYYY')
}

export function isToday(momentDay) {
  return momentDay.isSame(moment(), 'day')
}

export function createOneDay(newDay, selectMonthValue) {
  return {
    id: getId(newDay),
    date: {
      day: getDayOfMonth(newDay),
      month: getMonthOfYear(newDay),
      year: getYear(newDay),
    },
    isWeekend: isWeekend(newDay),
    isCurrentMonth: isCurrentMonth(newDay, selectMonthValue),
    isToday: isToday(newDay),
  }
}

export function createAllDaysForCurrWindow(year, month, day = 1) {
  const selectedDay = moment().set({ year: year, month: month, date: day })
  const startDay = selectedDay.clone().startOf('month').startOf('week')
  const currDay = startDay.subtract(1, 'day').clone()
  const resultArrAllDays = [...Array(42)].map(() => createOneDay(currDay.add(1, 'day').clone(), month))

  return resultArrAllDays
}

export const yearsValues = {
  2016: 2016,
  2017: 2017,
  2018: 2018,
  2019: 2019,
  2020: 2020,
  2021: 2021,
  2022: 2022,
  2023: 2023,
  2024: 2024,
  2025: 2025,
  2026: 2026,
}

// export const createDayMetods = {
//   getMonthOfYear: function getMonthOfYear(momentDay) {
//     return momentDay.month() + 1
//   },
//   getYear: function getYear(momentDay) {
//     return momentDay.year()
//   },
//   isCurrentMonth: function isCurrentMonth(momentDay, selectMonth) {
//     return momentDay.month() === selectMonth
//   },
//   getId: function getId(momentDay) {
//     return momentDay.format('DDMMYYYY')
//   },
//   isToday: function isToday(momentDay) {
//     return momentDay.isSame(moment(), 'day')
//   },
//   isWeekend: function isWeekend(momentDay) {
//     return momentDay.isoWeekday() === 6 || momentDay.isoWeekday() === 7
//   },
//   getDayOfMonth: function getDayOfMonth(momentDay) {
//     return momentDay.date()
//   },
// }
