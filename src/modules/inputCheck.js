const inputCheck = () => {

    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');

    const mainInput = document.querySelectorAll('.form-name')[0];
    const modalInput = document.querySelectorAll('.form-name')[1];
    const footerInput = document.getElementById('form2-name');
    const messageInput = document.getElementById('form2-message');

    const emailInputs = document.querySelectorAll('.form-email');

    const phoneInputs = document.querySelectorAll('.form-phone');

    const numberCheck = (input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, '');
        });
    };

    const textCheck = (input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яё\-\s]/i, '');
        });
    };

    const mailCheck = (input) => {
        input.forEach((item) => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^a-z\@\-\_\.\!\~\*\']/i, '');
            });
        });
    };

    const phoneCheck = (input) => {
        input.forEach((item) => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^0-9\-\(\)]/i, '');
            });
        });
    };

    numberCheck(calcSquare);
    numberCheck(calcCount);
    numberCheck(calcDay);

    textCheck(mainInput);
    textCheck(modalInput);
    textCheck(footerInput);
    textCheck(messageInput);

    mailCheck(emailInputs);

    phoneCheck(phoneInputs);
};

export default inputCheck;