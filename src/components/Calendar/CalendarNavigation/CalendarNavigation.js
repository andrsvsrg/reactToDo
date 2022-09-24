import './calendarNavigation.css'

import React from 'react'

import { Button } from '../../UI/my-button/index'
import { Select } from '../../UI/my-select/index'
import {
  getCurrentMonth,
  getCurrentYear,
  getTodayDayId,
  monthNamesArr,
  yearsValues,
  createAllDaysForCurrWindow,
} from '../../utils/data'
import { useDispatch, useSelector } from 'react-redux'
import { changeSelectedDay } from '../../../redux/actions/todos-actions'
import { changeSelectMonth, changeSelectYear, changeWindowCalendar } from '../../../redux/actions/calendar-actions'
import { mapStateCalendarToProps } from '../../../redux/selectors/calendar-selectors'

function CalendarNavigation() {
  const dispatch = useDispatch()
  const { selectMonthValue, selectYearValue } = useSelector(mapStateCalendarToProps)

  function onMonthSelectChange(e) {
    dispatch(changeSelectMonth(Number(e.target.value)))
  }

  function onYearSelectChange(e) {
    dispatch(changeSelectYear(Number(e.target.value)))
  }

  function onTodayClick() {
    dispatch(changeSelectYear(getCurrentYear()))
    dispatch(changeSelectMonth(getCurrentMonth()))
    dispatch(changeSelectedDay(getTodayDayId()))
    dispatch(changeWindowCalendar(createAllDaysForCurrWindow(getCurrentYear(), getCurrentMonth())))
  }

  function onNextMonthClick() {
    if (selectMonthValue === 11) {
      dispatch(changeSelectMonth(0))
      dispatch(changeSelectYear(selectYearValue + 1))
    } else {
      dispatch(changeSelectMonth(selectMonthValue + 1))
    }
  }

  function onPreviousMonthClick() {
    if (selectMonthValue === 0) {
      dispatch(changeSelectMonth(11))
      dispatch(changeSelectYear(selectYearValue - 1))
    } else {
      dispatch(changeSelectMonth(selectMonthValue - 1))
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
