import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import Calendar from './components/Calendar';
import CategoryPicker from './components/CategoryPicker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().startOf('year'),
      events: JSON.parse(localStorage.getItem('events') || '[]')
    }
  }

  handlePrevYear() {
    this.setState({
      date: this.state.date.clone().subtract(1, 'year')
    });
  }

  handleNextYear() {
    this.setState({
      date: this.state.date.clone().add(1, 'year')
    });
  }

  onPickerClose(event) {
    this.setState({
      showCategoryPicker: false,
      dateSelected: null,
      eventSelected: null
    });

    if (event) {
      const eventsCopy = JSON.parse(JSON.stringify(this.state.events));
      const index = this.state.events.findIndex((item) => item.date === event.date);
      if (index > -1) {
        eventsCopy[index] = event;
      } else {
        eventsCopy.push(event);
      }

      this.setState({ events: eventsCopy });
      localStorage.setItem('events', JSON.stringify(eventsCopy));
    }
  }

  render() {
    return (
      <div>
        <button className="btn-nav" onClick={() => this.handlePrevYear()}>
          Prev Year
        </button>
        <button className="btn-nav next-year" onClick={() => this.handleNextYear()}>
          Next Year
        </button>
        <Calendar startDate={ this.state.date }
                  date={ this.state.date }
                  endDate={ this.state.date.clone().endOf('year') }
                  today={ moment() }
                  onDayClick={(date, event) => {
                    this.setState({
                      showCategoryPicker: true,
                      dateSelected: date,
                      eventSelected: event
                    })
                  }}
                  events={this.state.events} />
        {this.state.showCategoryPicker ? (<CategoryPicker date={this.state.dateSelected}
                        event={this.state.eventSelected}
                        onClose={(event) => this.onPickerClose(event)}
                        events={['holiday', 'birthday', 'aniversary', 'busy']} />)
                        : ''
        }
      </div>
    );
  }
}

export default App;
