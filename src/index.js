import { render } from 'inferno';
import Calendar from './calendar';

const calStyle = {
  width: "50%",
  height: "500px"
};

render(
  <Calendar calendarStyle={calStyle} />, 
  document.getElementById('app')
);