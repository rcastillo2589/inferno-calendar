export const MONTHS = [
  { name: "January", abbrev: "Jan", days: 31 },
  { name: "February", abbrev: "Feb", days: [28, 29] }, 
  { name: "March", abbrev: "Mar", days: 31 },
  { name: "April", abbrev: "Apr", days: 30 },
  { name: "May", abbrev: "May", days: 31 }, 
  { name: "June", abbrev: "Jun", days: 30 }, 
  { name: "July", abbrev: "Jul", days: 31 }, 
  { name: "August", abbrev: "Aug", days: 31 }, 
  { name: "September", abbrev: "Sept", days: 30 },
  { name: "October", abbrev: "Oct", days: 31 },
  { name: "November", abbrev: "Nov", days: 30 },
  { name: "December", abbrev: "Dec", days: 31 }];

export function moveDate(dateToMove, moveAmt) {
  let newDate = new Date(
    dateToMove.getFullYear(),
    dateToMove.getMonth(),
    dateToMove.getDate()
  );
  newDate.setDate(dateToMove.getDate() + moveAmt);
  return newDate;
}

export function moveMonth(dateToMove, moveAmt) {
  let newDate = new Date(
    dateToMove.getFullYear(),
    dateToMove.getMonth(),
    dateToMove.getDate()
  );
  newDate.setMonth(dateToMove.getMonth() + moveAmt);
  return newDate;
}
