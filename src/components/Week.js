import React from 'react';
import { daysOfWeek } from '../utils/dateUtils';
import Day from './Day';

const Week = (props) => {
  return (
    <div key="days" className="week">
      <div className="wek-days">
        {
          daysOfWeek(props.date).map((date, i) => {
            let outside;

            if (props.edges) {
              outside = Boolean(props.edges.find((edge, j) => edge.isSame(date, 'month', 'week', 'year')));
            }

            return <Day outside={ !!outside } key={ `day-${i}` } date={ date } />
          })
        }
      </div>
    </div>
  );
};

export default Week;
