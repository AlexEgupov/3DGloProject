const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    statusBlock.style.color = "white";
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const validate = (list) => {
        let success = true;

        list.forEach(input => {
            if (success == false) {
                return;
            }
            if (input.name == 'user_name') {
                let nameCheck = /[а-яё\s]+/gi;
                nameCheck.test(input.value) ? success = true : success = false;
            } else if (input.name == 'user_phone') {
                let numCheck = /[0-9\-\(\)\+]/gi;
                numCheck.test(input.value) ? success = true : success = false;
            } else if (input.name == 'user_message') {
                let nameCheck = /[а-яё\s\d\!\?\.\,]+/gi;
                nameCheck.test(input.value) ? success = true : success = false;
            }
        });

        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        console.log('submit');

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;

                    formElements.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });

        } else {
            alert('Данные не валидны!!!');
        }
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожаааалуйста))');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitForm();

        });
    } catch (error) {
        console.log(error.message);
    }

};

export default sendForm;
