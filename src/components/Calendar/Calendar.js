import './calendar.css'

import moment from 'moment'
import React, { useEffect } from 'react'

import CalendarNavigation from './CalendarNavigation/CalendarNavigation'
import CalendarTable from './CalendarTable/CalendarTable'
import * as DateUtils from '../utils/data'
import { useDispatch, useSelector } from 'react-redux'
import { changeWindowCalendar } from '../../redux/actions/calendar-actions'

function Calendar() {
  useEffect(() => {
    DateUtils.startWeekFromMonday()
    dispatch(changeWindowCalendar(DateUtils.createAllDaysForCurrWindow(selectYearValue, selectMonthValue)))
  }, [])

  const dispatch = useDispatch()
  const selectMonthValue = useSelector((state) => state.calendarReducer.selectMonthValue)
  const selectYearValue = useSelector((state) => state.calendarReducer.selectYearValue)
  const currentWindowCalendar = useSelector((state) => state.calendarReducer.currentWindowCalendar)

  useEffect(() => {
    dispatch(changeWindowCalendar(DateUtils.createAllDaysForCurrWindow(selectYearValue, selectMonthValue)))
  }, [selectMonthValue, selectYearValue])

  return (
    <div className="calendar">
      <CalendarNavigation createValuesCurrWindow={DateUtils.createAllDaysForCurrWindow} />
      <CalendarTable currentWindowCalendar={currentWindowCalendar} />
    </div>
  )
}

export default React.memo(Calendar)
