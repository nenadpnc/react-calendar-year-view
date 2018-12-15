import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import Calendar from './components/Calendar';

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
                  />
      </div>
    );
  }
}

export default App;
