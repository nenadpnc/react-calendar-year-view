import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import Calendar from './Calendar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().startOf('year')
    }
  }

  handlePrevYear(e) {
    e.preventDefault();
    this.setState({
      date: this.state.date.clone().subtract(1, 'year')
    });
  }

  handleNextYear(e) {
    e.preventDefault();
    this.setState({
      date: this.state.date.clone().add(1, 'year')
    });
  }

  render() {
    return (
      <div>
        <a href="#" className="prevYear" onClick={(e) => this.handlePrevYear(e)}>
          Prev Year
        </a>
        <a href="#" className="nextYear" onClick={(e) => this.handleNextYear(e)}>
          Next Year
        </a>
        <Calendar startDate={ this.state.date }
                  date={ this.state.date }
                  endDate={ this.state.date.clone().endOf('year') }
                  mods={[
                    {
                      date: moment(),
                      classNames: [ 'current' ],
                      component: [ 'day', 'month', 'week' ]
                    },
                    {
                      startDate: moment().add(3, 'days'),
                      endDate: moment().add(7, 'days'),
                      classNames: [ 'longEvent' ],
                      component: [ 'day' ]
                    },
                    {
                      date: moment().add(3, 'days'),
                      classNames: [ 'appointment' ],
                      component: [ 'day' ]
                    },
                    {
                      date: moment().add(4, 'days'),
                      classNames: [ 'event', 'warning' ],
                      component: [ 'day' ],
                      events: {
                        onClick: (date, e) => alert(`${date.format('dddd')}'s event!`)
                      }
                    },
                    {
                      date: moment().add(5, 'days'),
                      classNames: [ 'event' ],
                      component: [ 'day' ]
                    },
                    {
                      component: 'day',
                      events: {
                        onClick: (date, e) => alert(date.format())
                      }
                    }
                  ]} 
                  />
      </div>
    );
  }
}

export default App;
