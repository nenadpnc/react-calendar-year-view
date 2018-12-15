import React from 'react';

const CategoryPicker = (props) => {
    const { date, events, show } = props;
    const event = props.event || {};

    return (
        <div>
            {show ?
            <div className="overlay">
                <div className="picker">
                    {events.map((category) => (
                        <div key={category}>
                            <input type="radio"
                                id={category}
                                name="picker"
                                seleted={event.date === date.unix() && event.category === category ? 'true' : undefined} />
                            <label htmlFor={category}>{category}</label>
                        </div>
                    ))}
                </div>
            </div> : ''
            }
        </div>
    );
}

export default CategoryPicker;