import React from 'react';
import { monthEdges, weeksOfMonth, daysOfWeek } from '../utils/dateUtils';
import Week from './Week';

const renderWeekHeader = (props) => {
    return (
      <div className="month-weekdays">
        {
          daysOfWeek(props.date).map((weekday, i) =>
            <div key={ `weekday-header-${i}` } className="month-weekdays-weekday">
              { weekday.format('dd') }
            </div>
          )
        }
      </div>
    );
};

const renderHeader = (props) => {
  return (
    <header key="header" className="month-header">
      { props.date.format('MMMM') }
    </header>
  );
};

const Month = (props) => {
  const { date } = props;
  const edges = monthEdges(date);

  return (
    <div className="month">
      { renderHeader(props) }
      { renderWeekHeader(props) }
      {
        weeksOfMonth(props.date).map((wDate, i) =>
          <Week key={ `week-${i}` }
                date={ wDate }
                edges={ edges } />
        )
      }
    </div>
  );
};

export default Month;
