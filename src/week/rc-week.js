import { Component } from 'inferno';
import { moveDate } from '../shared/util';
import Day from '../day/rc-day';

const DAYS = 7;
const weekContainer = {
  width: '100%',
  borderTop: '1px solid #cccccc'
};

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWeekView: false
    };
  }

  renderWeek(startDay, selectedMonth) {
    let days = [];
    for(let i = 0; i < DAYS; i++) {
      let dayNum = moveDate(startDay, i);
      if(dayNum.getMonth() !== selectedMonth) {
        days.push(
          <Day day={dayNum} highlight={true} />
        );
      } else {
        days.push(
          <Day day={dayNum} highlight={false} />
        );
      }
    }
    return days;
  }

  render() {
    const month = this.props.selected.getMonth();
    const week = this.renderWeek(this.props.start, month);
    const rowHeight = (100 / this.props.number) + '%';
    return (
      <div style={Object.assign({height: rowHeight}, weekContainer)}>
        {week}
      </div>
    );
  }
}

export default Week;
