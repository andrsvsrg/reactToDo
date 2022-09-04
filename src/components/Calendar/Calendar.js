import './calendar.css'

import moment from 'moment'
import React, { useState, useEffect } from 'react'

import { createDayMetods, getCurrentMonth, getCurrentYear } from '../utils/data'
import CalendarNavigation from './CalendarNavigation/CalendarNavigation'
import CalendarTable from './CalendarTable/CalendarTable'

function Calendar({ todo, setSelectedDay, selectedDay }) {
  useEffect(() => {
    moment.updateLocale('en', { week: { dow: 1 } })
  }, [])

  const [selectMonthValue, setSelectMonthValue] = useState(() => getCurrentMonth())
  const [selectYearValue, setSelectYearValue] = useState(() => getCurrentYear())

  const [currentWindowCalendar, setCurrentWindowCalendar] = useState(() =>
    createAllDaysForCurrWindow(getCurrentYear(), getCurrentMonth()),
  )

  useEffect(() => {
    setCurrentWindowCalendar(createAllDaysForCurrWindow(selectYearValue, selectMonthValue))
  }, [selectMonthValue, selectYearValue])

  return (
    <div className="calendar">
      <CalendarNavigation
        setSelectYearValue={setSelectYearValue}
        setSelectMonthValue={setSelectMonthValue}
        setSelectedDay={setSelectedDay}
        setCurrentWindowCalendar={setCurrentWindowCalendar}
        createValuesCurrWindow={createAllDaysForCurrWindow}
        selectMonthValue={selectMonthValue}
        selectYearValue={selectYearValue}
      />
      <CalendarTable
        currentWindowCalendar={currentWindowCalendar}
        selectedDay={selectedDay}
        selectMonthValue={selectMonthValue}
        setSelectedDay={setSelectedDay}
        todo={todo}
      />
    </div>
  )
}

export default React.memo(Calendar)

function createOneDay(newDay, selectMonthValue) {
  return {
    id: createDayMetods.getId(newDay),
    date: {
      day: createDayMetods.getDayOfMonth(newDay),
      month: createDayMetods.getMonthOfYear(newDay),
      year: createDayMetods.getYear(newDay),
    },
    isWeekend: createDayMetods.isWeekend(newDay),
    isCurrentMonth: createDayMetods.isCurrentMonth(newDay, selectMonthValue),
    isToday: createDayMetods.isToday(newDay),
  }
}

function createAllDaysForCurrWindow(year, month, day = 1) {
  const selectedDay = moment().set({ year: year, month: month, date: day })
  const startDay = selectedDay.clone().startOf('month').startOf('week')
  const currDay = startDay.subtract(1, 'day').clone()
  const resultArrAllDays = [...Array(42)].map(() => createOneDay(currDay.add(1, 'day').clone(), month))

  return resultArrAllDays
}
