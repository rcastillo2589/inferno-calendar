import { Component } from 'inferno';
import { LeftArrow, RightArrow } from './arrows';

const monthHeader = {
  height: '15%',
  width: '100%'
};
const monthHeaderCol = {
  float: 'left',
  height: '100%'
};
const monthHeaderLeft = {
  width: '10%',
  backgroundColor: 'inherit',
  border: 'none'
};
const monthHeaderCenter = {
  width: '80%',
  textAlign: 'center'
};
const monthHeaderRight = {
  width: '10%',
  backgroundColor: 'inherit',
  border: 'none'
};
const monthHeaderTitle = {
  position: 'relative',
  height: '100%',
  margin: '0',
  top: '10px'
};

class MonthHeader extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onMonthChange(e.currentTarget);
  }

  render() {
    return (
      <div style={monthHeader}>
        <button 
          id="monthleft"
          style={Object.assign(monthHeaderLeft, monthHeaderCol)}
          onClick={this.handleChange}>
            <LeftArrow height="100%" width="100%" />
          </button>
        <div style={Object.assign(monthHeaderCenter, monthHeaderCol)}>
          <h1 style={monthHeaderTitle}>{this.props.title}</h1>
        </div>
        <button 
          id="monthright"
          style={Object.assign(monthHeaderRight, monthHeaderCol)}
          onClick={this.handleChange}>
            <RightArrow height="100%" width="100%" />
          </button>
      </div>
    );
  }
}

export default MonthHeader;
