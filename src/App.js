import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import Calendar from './components/Calendar';
import CategoryPicker from './components/CategoryPicker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().startOf('year')
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
                  events={[
                    {
                      category: 'holiday',
                      date: 1544569200
                    },
                    {
                      category: 'birthday',
                      date: 1544828400
                    },
                    {
                      category: 'busy',
                      date:  1544310000
                    },
                    {
                      category: 'aniversary',
                      date:  1538604000
                    }
                  ]} />
        <CategoryPicker show={this.state.showCategoryPicker}
                        date={this.state.dateSelected}
                        event={this.state.eventSelected}
                        events={['holiday', 'birthday', 'aniversary', 'busy']} />
      </div>
    );
  }
}

export default App;
