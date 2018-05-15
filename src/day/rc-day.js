import { Component } from 'inferno';

const dayBox = {
  display: 'inline-block',
  width: '14.28%',
  height: '100%',
  borderLeft: '1px solid #cccccc',
  padding: '1px 5px',
  boxSizing: 'border-box'
};
const highlightNonActive = {
  backgroundColor: '#dedfe0',
};

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeginning: false,
      highlightActive: false
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  renderEvents() {
    let days = [];
    return days;
  }

  handleEnter(e) {
    this.setState({
      highlightActive: true
    });
  }

  handleLeave(e) {
    this.setState({
      highlightActive: false
    });
  }

  render() {
    const dayStyles = this.props.highlight ?
      Object.assign(highlightNonActive, dayBox) : dayBox;
    const allDayStyles = this.state.highlightActive ?
      Object.assign({backgroundColor: '#f9777c'}, dayStyles) : dayStyles;
    const font = { 
      width: '10%',
      fontSize: '100%' }
    return (
      <div 
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
        style={allDayStyles}>
        <span style={font}>{this.props.day.getDate()}</span>
      </div>
    );
  }
}

export default Day;
