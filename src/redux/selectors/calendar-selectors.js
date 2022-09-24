export const getSelectMonth = (state) => state.calendarReducer.selectMonthValue
export const getSelectYear = (state) => state.calendarReducer.selectYearValue
export const getWindowCalendar = (state) => state.calendarReducer.currentWindowCalendar
export const mapStateCalendarToProps = (state) => {
  return {
    selectMonthValue: getSelectMonth(state),
    selectYearValue: getSelectYear(state),
    currentWindowCalendar: getWindowCalendar(state),
  }
}
