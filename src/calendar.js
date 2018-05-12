import { Component } from 'inferno';

// if (year is not divisible by 4) then (it is a common year)
// else if (year is not divisible by 100) then (it is a leap year)
// else if (year is not divisible by 400) then (it is a common year)
// else (it is a leap year)
const WEEK = 7;
const MONTHS = 12;

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date()
    };
  }

  renderMonth() {
    let month = [];

  }

  renderWeek() {
    let week = [];
    const divWidth = 100 / 7;
    const divHeight = 100 / 4;
    for(let i = 0; i < WEEK; i++) {
      week.push(
        <div style={{width:divWidth + '%', height:divHeight + '%', border: '1px solid black'}}></div>
      );
    }
  }

  render() {
    return (
      <section style={{width:this.props.width, height:this.props.height}}>
        {this.renderWeek()}
      </section>
    );
  }
}

export default Calendar;
