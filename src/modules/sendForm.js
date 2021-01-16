const sendForm = (formClass) => {

    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

	const form = document.querySelector(formClass),
		formContent = form.querySelector('form');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: white;';
    form.appendChild(statusMessage);


    	const postData = body => fetch('../server.php', {
		    method: 'POST',
		    headers: {
		    	'Content-Type': 'application/json'
		    },
		    body: JSON.stringify(body)
	    });
		const body = document.querySelector('body');
		form.addEventListener('submit', event => {
			event.preventDefault();
			const target = event.target;
			target.parentElement.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
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
						formContent.style.display = 'none';
						statusMessage.textContent = successMessage;
                        inputs.forEach(elem => {
                            elem.value = '';
                        });
                    }
                })
                .catch(error => {
					formContent.style.display = 'none';
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

export default sendForm;