const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  const timerDays = document.getElementById("timer-days");
  let timerInterval;
  let daysWord;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 3600 / 24);
    let hours = Math.floor((timeRemaining / 3600) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    switch (true) {
      case days == 0:
        daysWord = "__)_)_)_";
        break;

      case days == 1:
        daysWord = "день";
        console.log("1");
        break;

      case days <= 4:
        daysWord = "дня";
        console.log("2-4");
        break;

      case days >= 5:
        daysWord = "дней";
        console.log("5+");
        break;
    }

    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerDays.textContent =
      getTime.days.toString().length === 1
        ? getTime.days + daysWord
        : getTime.days + daysWord;
    // timerDays.textContent = "   ";

    console.log("getTime.days   " + getTime.days);
    // let days = getTime.days;
    if ((getTime.days = 0)) {
      timerDays.textContent = "   ";
    }

    // getTime.days = 0 ? console.log("wqe") : getTime.days == "qwe";

    timerHours.textContent =
      getTime.hours.toString().length === 1
        ? "0" + getTime.hours
        : getTime.hours;
    timerMinutes.textContent =
      getTime.minutes.toString().length === 1
        ? "0" + getTime.minutes
        : getTime.minutes;
    timerSeconds.textContent =
      getTime.seconds.toString().length === 1
        ? "0" + getTime.seconds
        : getTime.seconds;
    return getTime.timeRemaining;
  };

  // updateClock();

  if (updateClock() > 0) {
    timerInterval = setInterval(updateClock, 1000);
  } else {
    clearInterval(timerInterval);
    timerDays.textContent = "00";
    timerHours.textContent = "00";
    timerMinutes.textContent = "00";
    timerSeconds.textContent = "00";
  }
};

export default timer;
