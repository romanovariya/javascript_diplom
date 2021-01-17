const calc = () => {
    const errorMessage = 'Что-то пошло не так';

    const form = document.querySelector('#card_order'),
        modal = document.querySelector('#thanks'),
        statusMessage = modal.querySelector('.thanks-message');

    if (form) {
        const postData = body => fetch('../server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        form.addEventListener('submit', event => {
        event.preventDefault();
        const target = event.target;
        const inputs = target.querySelectorAll('input');
        const formData = new FormData(target);
        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body)
            .then(response => {
                if (response.status !== 200) {
                throw new Error('status network not 200');
                } else {
                    modal.style.display = 'block';
                    inputs.forEach(elem => {
                        elem.value = '';
                    });
                }
            })
            .catch(error => {
                modal.style.display = 'block';
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
        });

        let empty = false;
        let radio = false;
        const formBtn = form.querySelector('button');

        const validateInput = target => {
            if (target.classList.contains('_phone')) {
                target.value = target.value.replace(/[^0-9+]/ig, '');
            } else if (target.classList.contains('_name')) {
                target.value = target.value.replace(/([^А-Яа-яёЁ])/, '');
            } 
        };
        const checkEmpty = form => {
            const inputs = form.querySelectorAll('input');
            formBtn.disabled = false;
            
            inputs.forEach(elem => {
                if (elem.value.trim() === '' && !elem.classList.contains('_code')) {
                    formBtn.disabled = true;
                    elem.classList.add('_error');
                    empty = true;
                } else if (elem.classList.contains('_phone')) {
                    let phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
                    if (elem.value.length < 12){
                        formBtn.disabled = true;
                        empty = true;
                        elem.classList.add('_error');
                    } else if (phoneRegExp.test(elem.value) === false){
                        formBtn.disabled = true;
                        empty = true;
                        elem.classList.add('_error');
                    } else {
                        empty = false;
                        elem.classList.remove('_error');
                    }
                } else if (elem.classList.contains('_name')) {
                    if (elem.value.length < 2) {
                        formBtn.disabled = true;
                        empty = true;
                        elem.classList.add('_error');
                    } else {
                        empty = false;
                        elem.classList.remove('_error');
                    }
                } else if (elem.classList.contains('checkbox')) {
                    if (!elem.checked) {
                        formBtn.disabled = true;
                        empty = true;
                    } else {
                        empty = false;
                    }
                }
            });

            if (empty === false) {
                formBtn.disabled = false;
            }

        };
        const checkRadio = (radioClass) => {
            const radios = form.querySelectorAll(radioClass);
            const tmp = Array.prototype.slice.call(radios);
            radio = tmp.some((elem) => {
                return elem.checked === true;
            });
        };

        const chekForm = () => {
            if (radio === true && empty === false ) {
                formBtn.disabled = false;
            } else {
                formBtn.disabled = true;
            }
        };

        const calcValue = () => {
            const months = form.querySelectorAll('.card-radio'),
                gym = form.querySelectorAll('.radio'),
                priceTotal = form.querySelector('#price-total'),
                discount = form.querySelector('._code');
            let price = 0;

            if (gym[0].checked === true) {
                const tmp = Array.prototype.slice.call(months);
                const chosenMonth = tmp.find(elem => elem.checked === true);
                if (chosenMonth.getAttribute('value') === '1') {
                    price = 1999;
                }
                if (chosenMonth.getAttribute('value') === '6') {
                    price = 9900;
                }
                if (chosenMonth.getAttribute('value') === '9') {
                    price = 13900;
                }
                if (chosenMonth.getAttribute('value') === '12') {
                    price = 19900;
                }
            }
            if (gym[1].checked === true) {
                const tmp = Array.prototype.slice.call(months);
                const chosenMonth = tmp.find(elem => elem.checked === true);
                if (chosenMonth.getAttribute('value') === '1') {
                    price = 2999;
                }
                if (chosenMonth.getAttribute('value') === '6') {
                    price = 14990;
                }
                if (chosenMonth.getAttribute('value') === '9') {
                    price = 21990;
                }
                if (chosenMonth.getAttribute('value') === '12') {
                    price = 24990;
                }
            }

            if(/^ТЕЛО2020$/.test(discount.value) === true) {
                price = Math.floor(price - price * 0.3);
            }

            priceTotal.innerHTML = price;

        };


        form.addEventListener('input', event => {
            const target = event.target;
            validateInput(target);
            checkEmpty(form);
            checkRadio('.radio');
            checkRadio('.card-radio');
            chekForm();
            calcValue();
        });
        form.addEventListener('click', () => {
            checkRadio('.radio');
            checkRadio('.card-radio');
            checkEmpty(form);
            chekForm();
            calcValue();
        });



    }
    
};

export default calc;