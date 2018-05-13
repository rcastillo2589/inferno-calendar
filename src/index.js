import { render } from 'inferno';
import Calendar from './calendar';

const calendarStyle = {
  width: "75%",
  height: "500px"
};

render(
  <Calendar calStyle={calendarStyle} />, 
  document.getElementById('app')
);