
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
		let phone = false,
		 name = false,
		 checkbox = false;
		formBtn.disabled = false;
		inputs.forEach(elem => {
			if (elem.value.trim() === '' && ( elem.classList.contains('_name') || elem.classList.contains('_phone'))) {
				formBtn.disabled = true;
				elem.classList.add('_error');
			} else if (elem.classList.contains('_phone')) {
				if (elem.value.length < 11) {
					elem.classList.add('_error');
					phone = false;
				} else {
					elem.classList.remove('_error');
					phone = true;
				}
			} else if (elem.classList.contains('_name')) {
				if (elem.value.length < 2) {
					elem.classList.add('_error');
					name = false;
				} else {
					elem.classList.remove('_error');
					name = true;
				}
			} else if (elem.classList.contains('checkbox')) {
				const pData = form.querySelector('.personal-data');
				if (!elem.checked) {
					pData.style = 'background-color: red';
					checkbox = false;
				} else {
                    checkbox = true;
					pData.style = 'background-color: transparent';
				}
			}
		});

        if (name === true && checkbox === true && phone === true) {
            formBtn.disabled = false;
        } else {
            formBtn.disabled = true;
        }
	};
    form.addEventListener('input', event => {
        const target = event.target;
        validateInput(target);
        checkEmpty(form);
    });
};

export default sendFormModal;
