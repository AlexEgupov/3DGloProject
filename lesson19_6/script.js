'use strict';

const body = document.querySelector('body');
const date = new Date();
const hours = date.getHours();
const newYear = new Date('1 january 2023').getTime();
let dateNow = date.getTime();
let div;
let timeRemaining = (newYear - dateNow) / 1000;
let daysUntilNewYear = Math.floor(timeRemaining / 60 / 60 / 24);
let USTime = date.toLocaleTimeString('en-US').replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$2$3");
let daysCut = date.toLocaleString('ru', { weekday: 'long' });
let days = daysCut[0].toUpperCase() + daysCut.substring(1).toLowerCase();

const numWord = (value, words) => {
    const lastNum = value % 10;

    if (value > 10 & value < 20) {
        return words[2];
    }
    else if (lastNum > 1 && lastNum < 5) {
        return words[1];
    }
    else if (lastNum === 1) {
        return words[0];
    }

    return words[2];
};

let daysWord = numWord(daysUntilNewYear, ['день', 'дня', 'дней']);
let leftWord = numWord(daysUntilNewYear, ['остался', 'осталось', 'осталось']);

body.insertAdjacentHTML('beforeend', `<div></div>`);

div = document.querySelector('div');

if (hours > 23 || hours < 7) {
    div.textContent = `Доброй ночи Сегодня: ${days} Текущее время: ${USTime}\n До нового года ${leftWord} ${daysUntilNewYear} ${daysWord}`;
} else if (hours > 6 && hours < 12) {
    div.textContent = `Доброе утро Сегодня: ${days} Текущее время: ${USTime}\n До нового года ${leftWord} ${daysUntilNewYear} ${daysWord}`;
} else if (hours > 11 && hours < 19) {
    div.textContent = `Добрый день Сегодня: ${days} Текущее время: ${USTime}\n До нового года ${leftWord} ${daysUntilNewYear} ${daysWord}`;
} else if (hours > 18 && hours < 24) {
    div.textContent = `Добрый вечер Сегодня: ${days} Текущее время: ${USTime} До нового года ${leftWord} ${daysUntilNewYear} ${daysWord}`;
}