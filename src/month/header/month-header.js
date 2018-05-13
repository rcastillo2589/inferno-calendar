import { Component } from 'inferno';
import './month-header.css';

class MonthHeader extends Component {
  render() {
    return (
      <div className="month-header">
        <div className="month-header-col month-header-left"></div>
        <div className="month-header-col month-header-center">
          <h1>{this.props.title}</h1>
        </div>
        <div className="month-header-col month-header-right"></div>
      </div>
    );
  }
}

export default MonthHeader;
