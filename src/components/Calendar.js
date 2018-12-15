import React, { Component } from 'react';
import moment from 'moment';
import Month from './Month';

export default class Calendar extends Component {
  moment () {
    const localMoment = moment.apply(null, arguments);
    localMoment.locale(this.props.locale);
    return localMoment;
  }

  renderHeader () {
    return (
      <header key="header" className="calendar-header">
        { this.moment(this.props.date).format('YYYY') }
      </header>
    );
  }

  getMonthRange () {
    const focus = this.moment(this.props.date || this.props.startDate).startOf('month');
    const start = this.moment(this.props.startDate);
    const end = this.moment(this.props.endDate);
    const size = end.diff(start, 'month') + 1;

    return Array(size).fill(0).map((n, i) => focus.clone().add(n + i, 'months'));
  }

  render () {
    return (
      <div>
        { this.renderHeader() }
        {
          this.getMonthRange().map((date, i) =>
           <Month key={ `month-${i}` } date={ date } />
          )
        }
      </div>
    );
  }
}
