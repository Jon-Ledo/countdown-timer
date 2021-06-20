//ending date
// current date
// subtract to find out how may days/seconds/ etc are left

const newYears = '1 Jan 2022'; // Don't set it as 01, returns invalid 


const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function countdown() {
  const currentDate = new Date();
  const newYearsDate = new Date(newYears);

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  // console.log(seconds, days, hours, minutes);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minsEl.textContent = minutes;
  secondsEl.textContent = formatTime(seconds);
}

function formatTime(time) {
  // adding a zero in front of the seconds
  return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);