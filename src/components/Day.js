import React from 'react';

const Day = (props) => {
  const { date, outside } = props;
  const today = new Date();

  return (
    <div className={ `day ${outside ? 'day--outside' : ''} ${date.isSame(today) ? 'current' : ''}` }>
      { date.format('D') }
    </div>
  );
};

export default Day;
