const cardsForm = (formClass, modalClass) => {
    const errorMessage = 'Что-то пошло не так';

    const form = document.querySelector(formClass),
        modal = document.querySelector(modalClass),
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
						if (elem.classList.contains('_phone') || elem.classList.contains('_name')) {
							elem.value = '';
						} else {
							elem.checked = false;
						}
					});
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
            if (elem.value.trim() === '') {
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
    const checkRadio = () => {
        const radios = form.querySelectorAll('.radio');
        const tmp = Array.prototype.slice.call(radios);
        radio = tmp.some((elem) => {
            return elem.checked === true;
        });
    };

    const chekForm = () => {
        if (radio === true && empty === false ) {
            formBtn.disabled = false;
        } else {
                const card = form.querySelector('.cards-types');
            if (radio === false) {
                card.style.cssText = 'box-shadow: 0 0 15px red';
            } else if (radio === true) {
                card.style.cssText = 'box-shadow: none';
            }
            formBtn.disabled = true;
        } 
    };
    form.addEventListener('input', event => {
        const target = event.target;
        validateInput(target);
        checkEmpty(form);
        checkRadio(form);
        chekForm();
    });
    form.addEventListener('click', (event) => {
        checkRadio(form);
        checkEmpty(form);
        chekForm();
    });
    }
    
};

export default cardsForm;