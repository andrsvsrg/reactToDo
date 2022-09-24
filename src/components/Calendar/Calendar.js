import './calendar.css'

import React, { useEffect } from 'react'

import CalendarNavigation from './CalendarNavigation/CalendarNavigation'
import CalendarTable from './CalendarTable/CalendarTable'
import { createAllDaysForCurrWindow, startWeekFromMonday } from '../utils/data'
import { useDispatch, useSelector } from 'react-redux'
import { changeWindowCalendar } from '../../redux/actions/calendar-actions'
import { mapStateCalendarToProps } from '../../redux/selectors/calendar-selectors'

function Calendar() {
  const dispatch = useDispatch()
  const { selectMonthValue, selectYearValue } = useSelector(mapStateCalendarToProps)

  useEffect(() => {
    startWeekFromMonday()
    dispatch(changeWindowCalendar(createAllDaysForCurrWindow(selectYearValue, selectMonthValue)))
  }, [])

  useEffect(() => {
    dispatch(changeWindowCalendar(createAllDaysForCurrWindow(selectYearValue, selectMonthValue)))
  }, [selectMonthValue, selectYearValue])

  return (
    <div className="calendar">
      <CalendarNavigation />
      <CalendarTable />
    </div>
  )
}

export default React.memo(Calendar)
