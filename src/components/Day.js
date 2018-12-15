import React from 'react';

const Day = (props) => {
  const { date, outside, today } = props;

  return (
    <div className={ `day ${outside ? 'day--outside' : ''} ${date.isSame(today, 'd') ? 'day--current' : ''}` }>
      { date.format('D') }
    </div>
  );
};

export default Day;
