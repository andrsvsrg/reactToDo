import moment from 'moment'
import React, { useState } from 'react';

import './calendar.css'

const Calendar = ({ todo, setToDo }) => {

  moment.updateLocale('en', { week: { dow: 1 } });


  const [currentWindowCalendar, setCurrentWindowCalendar] = useState(setValuesCurrWindow(moment().year(),moment().month()))
  const [selectMonthValue, setSelectMonthValue] = useState(moment().month());
  const [selectYearValue, setSelectYearValue] = useState(moment().year());

  const today = moment();

  function setValuesCurrWindow(year, month, day = 1) {

    const selectedDay = moment().set({ 'year': year, 'month': month, 'date': day })
    const startDay = selectedDay.clone().startOf('month').startOf('week')
    let currDay = startDay.subtract(1, 'day').clone();
    const resultArrAllDays = [...Array(42)].map(() => currDay.add(1, 'day').clone());

    return resultArrAllDays;
  }




  const defaultValues = {
    years       : [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
    monthsNames : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    weekDayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }



  function changeMonthSelect(e) {
    setSelectMonthValue(Number(e.target.value))
    setCurrentWindowCalendar(setValuesCurrWindow(selectYearValue, selectMonthValue));
  }

  function changeYearSelect(e) {
    setSelectYearValue(Number(e.target.value))
    setCurrentWindowCalendar(setValuesCurrWindow(selectYearValue, selectMonthValue));
  }


  return (
    <div className="calendar">
      <div style={{textAlign: 'center'}}>
        <p>{'current month: '  + selectMonthValue }</p>
        <p>{'current year: '  + selectYearValue }</p>
        {console.log(currentWindowCalendar)}
      </div>

      <div className="select_date">

        <button className="calendar_btn"> { '<' } </button>  {/* BUTTON PREV MONTH */ }

        <select value={selectMonthValue} onChange={(e) => changeMonthSelect(e)} className="calendar_select calendar_select_month">  {/* SELECT MONTH */ }
          {
            defaultValues.monthsNames.map((month, index) => {
              return <option key={ index } value={ index }> { month }</option>;
            })
          }
        </select>

        <select value={selectYearValue}
                onChange={(e) => changeYearSelect(e)}
                className="calendar_select calendar_select_year">  {/* SELECT YEARS */ }
          {
            defaultValues.years.map((year, index) => {
              return <option key={ index } value={ year }>{ year }</option>
            })
          }
        </select>

        <button className="calendar_btn"> { '>' } </button> {/* BUTTON NEXT MONTH */ }

      </div>

      <div className="calendar_table">
        <div className="daysOfWeek">   {/* DAYS OF WEEK (MN,FR,SUN) */ }
          {
            defaultValues.weekDayNames.map((dayOfWeek, index) => {
              return <div className="dayOfWeek_Item" key={ index }>{ dayOfWeek }</div>
            })
          }
        </div>
        <div className="calendar_table_dates">  {/* DAYS OF MONTH, 42 DAYS */ }
          {
            currentWindowCalendar.map((dateItem) => {
              function AddClassDay(item) {
                let classes;
                if (item.day() === 6 || item.day() === 0) {
                  classes = 'weekend'
                } else {
                  classes = ''
                }
                return classes;
              }

              const dataItemClasses = 'dataItem ' + AddClassDay(dateItem)
              return <div className={ dataItemClasses } key={ dateItem.format('DDMMYYYY') }>
                <div className={ dateItem.isSame(today, 'day') ? 'today' : '' }>
                  { dateItem.format('D') }
                </div>

              </div>
            })
          }
        </div>
      </div>


    </div>
  );
};

export default Calendar;