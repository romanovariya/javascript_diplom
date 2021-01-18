const calc = () => {
    const errorMessage = 'Что-то пошло не так';

    const form = document.querySelector('.choose-abonement'),
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
						if (elem.classList.contains('_phone') || elem.classList.contains('_name') || elem.classList.contains('_code')) {
							elem.value = '';
						} else {
							elem.checked = false;
						}
                    });
                    const priceTotal = form.querySelector('#price-total');
                    priceTotal.innerHTML = '0';

                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 3000);
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
                    const pData = form.querySelector('.personal-data');
                    if (!elem.checked) {
                        formBtn.disabled = true;
                        empty = true;
					    pData.style = 'background-color: red';
                    } else {
                        empty = false;
					    pData.style = 'background-color: transparent';
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
            return radio;
        };

        const chekForm = () => {
            if (checkRadio('.radio') === true && checkRadio('.card-radio') === true && empty === false ) {
                formBtn.disabled = false;
            } else {
                const gym = form.querySelectorAll('.club');
                const time = form.querySelector('.time');
                if (checkRadio('.radio') === false) {
                    gym[0].style.cssText = 'box-shadow: 0 0 15px red';
                    gym[1].style.cssText = 'box-shadow: 0 0 15px red';
                } else if (checkRadio('.radio') === true) {
                    gym[0].style.cssText = 'box-shadow: none';
                    gym[1].style.cssText = 'box-shadow: none';
                } 
                if (checkRadio('.card-radio') === false) {
                    time.style.cssText = 'box-shadow: 0 0 15px red';
                } else if (checkRadio('.card-radio') === true) {
                    time.style.cssText = 'box-shadow: none';
                }

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
            chekForm();
            if (checkRadio('.radio') === true && checkRadio('.card-radio') === true) {
                calcValue();
            }
        });
        form.addEventListener('click', () => {
            checkEmpty(form);
            chekForm();
            if (checkRadio('.radio') === true && checkRadio('.card-radio') === true) {
                calcValue();
            }
        });



    }
    
};

export default calc;