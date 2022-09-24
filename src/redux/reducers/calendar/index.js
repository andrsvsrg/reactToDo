import * as DateUtils from '../../../components/utils/data'
import { CHANGE_SELECT_MONTH, CHANGE_SELECT_YEAR, CHANGE_WINDOW_CALENDAR } from '../../../constants/actions-types'

const initialState = {
  selectMonthValue: DateUtils.getCurrentMonth(),
  selectYearValue: DateUtils.getCurrentYear(),
  currentWindowCalendar: [],
}

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECT_MONTH:
      return { ...state, selectMonthValue: action.data }

    case CHANGE_SELECT_YEAR:
      return { ...state, selectYearValue: action.data }

    case CHANGE_WINDOW_CALENDAR:
      return { ...state, currentWindowCalendar: action.data }

    default:
      return state
  }
}
