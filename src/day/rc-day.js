import { Component } from 'inferno';
import './rc-day.css';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeginning: false,
      day: props.day.getDate()
    };
  }

  renderEvents() {
    let days = [];
    return days;
  }

  render() {
    const dayClass = this.state.isBeginning ?
      "day-box-start" : "day-box";
    return (
      <div className={dayClass}>
        <span>{this.state.day}</span>
      </div>
    );
  }
}

export default Day;
