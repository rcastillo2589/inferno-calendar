import { Component } from 'inferno';
import MonthHeader from './header/month-header';
import Week from '../week/rc-week';
import { MONTHS, moveDate } from '../shared/util';
import './rc-month.css';

const WEEKS = 4;

class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
      selected: props.selected
    };
  }

  getStartingDay(weekNumber) {
    const firstOfTheMonth = new Date(
      this.state.selected.getFullYear(),
      this.state.selected.getMonth()
    );
    const weekFactor = weekNumber * 7;
    const moveAmt = ((7 - firstOfTheMonth.getDay()) - 7) + weekFactor;
    return moveDate(firstOfTheMonth, moveAmt);
  }

  renderMonth() {
    let weeks = [];
    for(let i = 0; i < WEEKS; i++) {
      weeks.push(
        <Week 
          start={this.getStartingDay(i)}
          current={this.state.current}
          selected={this.state.selected}
          number={WEEKS} /> 
      );
    }
    return weeks;
  }

  getMonthName(monthIndex) {
    return MONTHS[monthIndex]['name'];
  }

  render() {
    const month = this.renderMonth();
    const monthName = this.getMonthName(this.state.selected.getMonth());
    return (
      <div className="month-container">
        <MonthHeader title={monthName} />
        <div className="weeks-container">
          {month}
        </div>
      </div>
    );
  }
}

export default Month;
