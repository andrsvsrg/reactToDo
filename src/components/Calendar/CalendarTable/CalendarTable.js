import './calendarTable.css'

import React from 'react'
import { isSelectedDay } from '../../utils/data'

function CalendarTable({ currentWindowCalendar, selectedDay, setSelectedDay, todo }) {
  function changeSelectedDay(currDay) {
    setSelectedDay(currDay.id)
  }

  return (
    <>
      <div className="calendar-table">
        <div className="table-daysOfWeek">
          {weekDayNames.map((dayOfWeek, index) => {
            return (
              <div className="dayOfWeek-item" key={index}>
                {dayOfWeek}
              </div>
            )
          })}
        </div>
        <div className="calendar-table-dates">
          {currentWindowCalendar.map((currDay) => {
            return (
              <div
                onClick={() => {
                  changeSelectedDay(currDay)
                }}
                className={'dataItem ' + isWeekendClass(currDay) + IsSelectedDayClass(currDay, selectedDay)}
                key={currDay.id}
              >
                <div className={isTodayIsThisMonthClasses(currDay)}>{currDay.date.day}</div>
                <div className={hasTask(currDay, todo)}></div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default React.memo(CalendarTable)

const weekDayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function hasTask(currDay, todo) {
  return todo[currDay.id]?.length ? 'haveTaskForThisDay' : ''
}

function isWeekendClass(currDay) {
  return currDay.isWeekend ? 'weekend ' : ''
}

function isTodayIsThisMonthClasses(currDay) {
  let classes = currDay.isToday ? 'today ' : ''
  classes += currDay.isCurrentMonth ? '' : 'notThisMonthColor'
  return classes
}

function IsSelectedDayClass(currDay, selectedDay) {
  return isSelectedDay(currDay, selectedDay) ? 'selectedDay' : ''
}
