import { Component } from 'inferno';
import { moveDate } from '../shared/util';
import Day from '../day/rc-day';
import './rc-week.css';

const DAYS = 7;

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWeekView: false,
      startDay: props.start
    };
  }

  renderWeek() {
    let days = [];
    for(let i = 0; i < DAYS; i++) {
      let dayNum = moveDate(this.state.startDay, i);
      days.push(
        <Day day={dayNum} />
      );
    }
    return days;
  }

  render() {
    const week = this.renderWeek();
    const rowHeight = (100 / this.props.number) + '%';
    return (
      <div style={{height:rowHeight}} className="week-container-full">
        {week}
      </div>
    );
  }
}

export default Week;
