import { Component } from 'inferno';
import MonthHeader from './header/month-header';
import Week from '../week/rc-week';
import { MONTHS, moveMonth, moveDate } from '../shared/util';

const WEEKS = 6;
const monthContainer = {
  width: '100%',
  height: '100%',
  boxShadow: '0 2px 10px #cccccc'
};
const weeksContainer = {
  width: '100%',
  height: '85%'
}

class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
      selected: props.selected
    };
    this.handleMonthChange = this.handleMonthChange.bind(this);
  }

  handleMonthChange(target) {
    let move = 0;
    if(target['id'] === 'monthleft') {
      move = -1;
    } else {
      move = 1;  
    }
    this.setState({
      selected: moveMonth(this.state.selected, move)
    });
  }

  getStartingDay(selectedDay, weekNumber) {
    const firstOfTheMonth = new Date(
      selectedDay.getFullYear(),
      selectedDay.getMonth()
    );
    const weekFactor = weekNumber * 7;
    const moveAmt = ((7 - firstOfTheMonth.getDay()) - 7) + weekFactor;
    return moveDate(firstOfTheMonth, moveAmt);
  }

  renderMonth(selectedDay) {
    let weeks = [];
    for(let i = 0; i < WEEKS; i++) {
      weeks.push(
        <Week 
          start={this.getStartingDay(selectedDay, i)}
          current={this.state.current}
          selected={selectedDay}
          number={WEEKS} /> 
      );
    }
    return weeks;
  }

  getMonthName(monthIndex) {
    return MONTHS[monthIndex]['name'];
  }

  render() {
    const month = this.renderMonth(this.state.selected);
    const monthName = this.getMonthName(this.state.selected.getMonth());
    return (
      <div style={monthContainer}>
        <MonthHeader 
          title={monthName}
          onMonthChange={this.handleMonthChange} />
        <div style={weeksContainer}>
          {month}
        </div>
      </div>
    );
  }
}

export default Month;
