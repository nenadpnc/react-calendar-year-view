import React from 'react';

const Day = (props) => {
  const { date, outside, today, onDayClick, events } = props;

  const event = (events || []).find((event) => date.unix() === event.date)

  return (
    <div onClick={() => onDayClick(date, event)}
      className={ `day${outside ? ' day--outside' : ''}${date.isSame(today, 'd') ? ' day--current' : ''} ${event ? event.category : ''}` }>
      { date.format('D') }
    </div>
  );
};

export default Day;
