import './calendarTable.css'

import React from 'react';
import moment from 'moment';

const CalendarTable = ({currentWindowCalendar, selectedDay, selectMonthValue, setSelectedDay, todo}) => {

  function addClassForAllDays(item) {
    let classes;
    if (item.day() === 6 || item.day() === 0) {
      classes = 'weekend';
    } else {
      classes = '';
    }
    if (item.isSame(selectedDay, 'day')) {
      classes = 'selectedDay';
    }

    return classes;
  }

  function addClassForCurrentMonth(dateItem) {
    let classesDate = dateItem.isSame(moment(), 'day') ? 'today' : '';
    if (!(dateItem.month() === selectMonthValue)) {
      classesDate += ' notThisMonthColor';
    }

    return classesDate;
  }


  return (
    <>
      <div className="calendar-table">
        <div className="table-daysOfWeek">
          { weekDayNames.map((dayOfWeek, index) => {
            return (
              <div className="dayOfWeek-item" key={ index }>
                { dayOfWeek }
              </div>
            );
          }) }
        </div>
        <div className="calendar-table-dates">
          { currentWindowCalendar.map((dateItem) => {
            return (
              <div
                onClick={ () => {
                  setSelectedDay(dateItem);
                } }
                className={'dataItem ' + addClassForAllDays(dateItem) }
                key={ dateItem.format('DDMMYYYY') }
              >
                <div className={ addClassForCurrentMonth(dateItem) }>{ dateItem.format('D') }</div>
                <div
                  className={
                    todo[dateItem.format('DDMMYYYY')]?.length ? 'haveTaskForThisDay' : ''
                  }
                ></div>
              </div>
            );
          }) }
        </div>
      </div>
    </>
  );
};

export default CalendarTable;



const weekDayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

