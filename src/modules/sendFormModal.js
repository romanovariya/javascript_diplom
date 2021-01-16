
const sendFormModal = (formClass, modalClass) => {
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
        } else if (target.classList.contains('_name')) {
            target.value = target.value.replace(/([^А-Яа-яёЁ])/, '');
        } 
    };

    const checkEmpty = form => {
        const inputs = form.querySelectorAll('input');
        const formBtn = form.querySelector('button');
        let empty = false;
        formBtn.disabled = false;
        
        inputs.forEach(elem => {
            if (elem.value.trim() === '') {
                formBtn.disabled = true;
                empty = true;
            } else if (elem.classList.contains('_phone')) {
                if (!(elem.value.length >= 6 && elem.value.length <= 11)) {
                    formBtn.disabled = true;
                    empty = true;
                }
            } else if (elem.classList.contains('_name')) {
                if (elem.value.length < 2) {
                    formBtn.disabled = true;
                    empty = true;
                }
            } else if (elem.classList.contains('checkbox')) {
                if (!elem.checked) {
                    formBtn.disabled = true;
                    empty = true;
                }
            }
        });

        if (empty === false) {
            formBtn.disabled = false;
        }

    };
    form.addEventListener('input', event => {
        const target = event.target;
        validateInput(target);
        checkEmpty(form);
    });
};

export default sendFormModal;
