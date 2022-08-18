import "./calendarNavigation.css";

import React from "react";
import moment from "moment";

import MyButton from "../../UI/button/MyButton";
import MySelect from "../../UI/select/MySelect";

const CalendarNavigation = React.memo(function CalendarNavigation({
  setSelectMonthValue,
  setSelectYearValue,
  setSelectedDay,
  setCurrentWindowCalendar,
  createValuesCurrWindow,
  selectMonthValue,
  selectYearValue,
}) {
  function onMonthSelectChange(e) {
    setSelectMonthValue(Number(e.target.value));
  }

  function onYearSelectChange(e) {
    setSelectYearValue(Number(e.target.value));
  }

  function onTodayClick() {
    setSelectMonthValue(moment().month());
    setSelectYearValue(moment().year());
    setSelectedDay(moment());
    setCurrentWindowCalendar(
      createValuesCurrWindow(moment().year(), moment().month())
    );
  }

  function onNextMonthClick() {
    if (selectMonthValue === 11) {
      setSelectMonthValue(0);
      setSelectYearValue(selectYearValue + 1);
    } else {
      setSelectMonthValue(selectMonthValue + 1);
    }
  }

  function onPreviousMonthClick() {
    if (selectMonthValue === 0) {
      setSelectMonthValue(11);
      setSelectYearValue(selectYearValue - 1);
    } else {
      setSelectMonthValue(selectMonthValue - 1);
    }
  }

  return (
    <div className="calendar-navigation">
      <MyButton onClick={onPreviousMonthClick} className="calendar-button">
        {"<"}
      </MyButton>

      <MySelect
        value={selectMonthValue}
        onChange={onMonthSelectChange}
        className="calendar-select calendar-select-month"
        optionsObj={defaultValuesForSelect.monthsNames}
      />

      <MyButton className="calendar-button today-button" onClick={onTodayClick}>
        Today
      </MyButton>

      <MySelect
        value={selectYearValue}
        onChange={onYearSelectChange}
        className="calendar-select calendar-select-year"
        optionsObj={defaultValuesForSelect.years}
      />

      <MyButton onClick={onNextMonthClick} className="calendar-button">
        {">"}
      </MyButton>
    </div>
  );
});

export default CalendarNavigation;

const defaultValuesForSelect = {
  years: {
    2016: 2016,
    2017: 2017,
    2018: 2018,
    2019: 2019,
    2020: 2020,
    2021: 2021,
    2022: 2022,
    2023: 2023,
    2024: 2024,
    2025: 2025,
    2026: 2026,
  },
  monthsNames: {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  },
};
