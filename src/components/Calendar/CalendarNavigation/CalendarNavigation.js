import './calendarNavigation.css'

import React from 'react'

import { Button } from '../../UI/my-button/index'
import { Select } from '../../UI/my-select/index'
import { getCurrentMonth, getCurrentYear, getTodayDayId, monthNamesArr, yearsValues } from '../../utils/data'

function CalendarNavigation({
  setSelectMonthValue,
  setSelectYearValue,
  setSelectedDay,
  setCurrentWindowCalendar,
  createValuesCurrWindow,
  selectMonthValue,
  selectYearValue,
}) {
  function onMonthSelectChange(e) {
    setSelectMonthValue(Number(e.target.value))
  }

  function onYearSelectChange(e) {
    setSelectYearValue(Number(e.target.value))
  }

  function onTodayClick() {
    setSelectMonthValue(() => getCurrentMonth())
    setSelectYearValue(() => getCurrentYear())
    setSelectedDay(() => getTodayDayId())
    setCurrentWindowCalendar(createValuesCurrWindow(getCurrentYear(), getCurrentMonth()))
  }

  function onNextMonthClick() {
    if (selectMonthValue === 11) {
      setSelectMonthValue(0)
      setSelectYearValue((prev) => prev + 1)
    } else {
      setSelectMonthValue((prev) => prev + 1)
    }
  }

  function onPreviousMonthClick() {
    if (selectMonthValue === 0) {
      setSelectMonthValue(11)
      setSelectYearValue((prev) => prev - 1)
    } else {
      setSelectMonthValue((prev) => prev - 1)
    }
  }

  return (
    <div className="calendar-navigation">
      <Button onClick={onPreviousMonthClick} className="calendar-button">
        {'<'}
      </Button>

      <Select
        value={selectMonthValue}
        onChange={onMonthSelectChange}
        className="calendar-select calendar-select-month"
        optionsObj={monthNamesArr}
      />

      <Button className="calendar-button today-button" onClick={onTodayClick}>
        Today
      </Button>

      <Select
        value={selectYearValue}
        onChange={onYearSelectChange}
        className="calendar-select calendar-select-year"
        optionsObj={yearsValues}
      />

      <Button onClick={onNextMonthClick} className="calendar-button">
        {'>'}
      </Button>
    </div>
  )
}

export default React.memo(CalendarNavigation)
