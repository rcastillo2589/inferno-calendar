import { Component } from 'inferno';
import Month from './month/rc-month';
import Week from './week/rc-week';

const YEARVIEW = "year";
const MONTHVIEW = "month";
const WEEKVIEW = "week";
const DAYVIEW = "day";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      selectedDate: new Date(),
      view: MONTHVIEW
    };
  }

  getView() {
    switch(this.state.view) {
      case YEARVIEW: return (
          <div></div>
        ); 
      case MONTHVIEW: return (
          <Month 
            current={this.state.currentDate}
            selected={this.state.selectedDate} />
        );
      case WEEKVIEW: return (
          <Week 
            current={this.state.currentDate}
            selected={this.state.selectedDate} />
        );
      case DAYVIEW: return (
          <div></div>
        );
      default: break;
    }
  }

  render() {
    const calendarView = this.getView();
    return (
      <section style={this.props.calStyle}>
        {calendarView}
      </section>
    );
  }
}

export default Calendar;
