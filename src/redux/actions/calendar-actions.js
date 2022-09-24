import { CHANGE_SELECT_MONTH, CHANGE_SELECT_YEAR, CHANGE_WINDOW_CALENDAR } from '../../constants/actions-types/'

export function changeSelectMonth(newMonth) {
  return {
    type: CHANGE_SELECT_MONTH,
    data: newMonth,
  }
}

export function changeSelectYear(newYear) {
  return {
    type: CHANGE_SELECT_YEAR,
    data: newYear,
  }
}

export function changeWindowCalendar(newWindowCalendar) {
  return {
    type: CHANGE_WINDOW_CALENDAR,
    data: newWindowCalendar,
  }
}
