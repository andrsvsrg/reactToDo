import moment from 'moment'

export const monthNamesArr = moment()._locale._months

export function isSelectedDay(dayObj, selectedDay) {
  return dayObj.id === selectedDay
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
