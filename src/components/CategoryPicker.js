import React, { Component } from 'react';

class CategoryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: props.event || {}
    }
  }

  onCategoryChange(category) {
    this.setState({
      event: {
        category,
        date: this.props.date.unix()
      }
    })
  }

  onClose(saving) {
    this.props.onClose(saving ? Object.assign({}, this.state.event) : undefined);
    this.setState({ event: {} });
  }

  render() {
    const { events } = this.props;
    return (
      <div className="overlay">
        <div className="picker">
          <h3>Choose category:</h3>
          {events.map((category) => (
            <div className="category-wrapper" key={category}>
              <input type="radio"
                id={category}
                name="picker"
                onChange={() => this.onCategoryChange(category)}
                checked={this.state.event.category === category} />
              <label htmlFor={category}><span className={`category-square ${category}`}></span>{category}</label>
            </div>
          ))}
          <div className="category-wrapper">
            <input type="radio"
              id="noCategory"
              name="picker"
              onChange={() => this.onCategoryChange('no-category')}
              checked={this.state.event.category === 'no-category' || !this.state.event.category} />
            <label htmlFor="noCategory">no category</label>
          </div>
          <div className="picker-buttons">
            <button className="btn-close" onClick={() => this.onClose(false)}>Close</button>
            <button className="btn-save" onClick={() => this.onClose(true)}>Save</button>
          </div>
        </div>
      </div>
    );
  }
};

export default CategoryPicker;