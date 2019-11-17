import React from 'react'
import DatePicker from "react-datepicker";

export default class CustomizedDatePicker extends React.Component {

    state= {
        startDate: new Date()
    }

    handleChange = date => {
        this.setState({
          startDate: date,
          showBook: true
        });
    };
    render(){

        const minTime = new Date();
        const maxTime = new Date();
        minTime.setHours(8);
        minTime.setMinutes(30);
        maxTime.setHours(19);
        maxTime.setMinutes(30);

        return (
            <div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    minTime={minTime}
                    maxTime={maxTime}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={new Date()}
                    placeholderText="Select a date and a slot"
                />
            </div>
        )
    }
}