import './calendar.css'

import moment from 'moment'
import React, { useState, useEffect } from 'react'

import CalendarNavigation from './CalendarNavigation/CalendarNavigation'
import CalendarTable from './CalendarTable/CalendarTable'

function Calendar({ todo, setSelectedDay, selectedDay }) {
  useEffect(() => {
    moment.updateLocale('en', { week: { dow: 1 } })
  }, [])

  const [selectMonthValue, setSelectMonthValue] = useState(() => moment().month())
  const [selectYearValue, setSelectYearValue] = useState(() => moment().year())

  const [currentWindowCalendar, setCurrentWindowCalendar] = useState(() =>
    createValuesCurrWindow(moment().year(), moment().month()),
  )

  useEffect(() => {
    setCurrentWindowCalendar(createValuesCurrWindow(selectYearValue, selectMonthValue))
  }, [selectMonthValue, selectYearValue])

  return (
    <div className="calendar">
      <CalendarNavigation
        setSelectYearValue={setSelectYearValue}
        setSelectMonthValue={setSelectMonthValue}
        setSelectedDay={setSelectedDay}
        setCurrentWindowCalendar={setCurrentWindowCalendar}
        createValuesCurrWindow={createValuesCurrWindow}
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

function createValuesCurrWindow(year, month, day = 1) {
  const selectedDay = moment().set({ year: year, month: month, date: day })
  const startDay = selectedDay.clone().startOf('month').startOf('week')
  const currDay = startDay.subtract(1, 'day').clone()
  const resultArrAllDays = [...Array(42)].map(() => currDay.add(1, 'day').clone())

  return resultArrAllDays
}
