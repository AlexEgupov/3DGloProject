const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    let interval;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, hours, minutes, seconds };
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();
        let zeroHours = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;
        let zeroMinutes = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;
        let zeroSeconds = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;

        if (getTime.timeRemaining > 0) {
            timerHours.textContent = zeroHours;
            timerMinutes.textContent = zeroMinutes;
            timerSeconds.textContent = zeroSeconds;
        } else {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            clearInterval(interval);
        }
    };
    interval = setInterval(updateClock, 1000);
};

export default timer;