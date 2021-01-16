const footerForm = (formClass, modalClass) => {
    const errorMessage = 'Что-то пошло не так';

    const form = document.querySelector(formClass),
        modal = document.querySelector(modalClass),
        statusMessage = modal.querySelector('.thanks-message');

    
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
        
    const validateInput = target => {
        if (target.classList.contains('_phone')) {
            target.value = target.value.replace(/[^0-9+]/ig, '');
        }
    };

    const checkEmpty = form => {
        const inputs = form.querySelectorAll('input');
        const formBtn = form.querySelector('button');
        let empty = false;
        formBtn.disabled = false;
        
        inputs.forEach(elem => {
            if (elem.classList.contains('_phone')) {
                let phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
                if (!(elem.value.length >= 11 && elem.value.length <= 18)) {
                    formBtn.disabled = true;
                    empty = true;
                } else if (phoneRegExp.test(elem.value) === false){
                    formBtn.disabled = true;
                    empty = true;
                } else {
                    formBtn.disabled = false;
                    empty = false;
                }
            } 
        });

        if (empty === false) {
            formBtn.disabled = false;
        }

    };
    let radio = 0;
    const checkRadio = () => {
        const radios = form.querySelectorAll('.radio');
        const formBtn = form.querySelector('button');

        if (radios[0].checked === false && radios[1].checked === false) {
            formBtn.disabled = true;
        } else {
            formBtn.disabled = false;
        }


    };
    form.addEventListener('input', event => {
        const target = event.target;
        validateInput(target);
        checkEmpty(form);
        checkRadio(form);
    });
    form.addEventListener('click', (event) => {
        checkEmpty(form);
        checkRadio(form);
    });
};

export default footerForm;