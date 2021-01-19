const formToggle = (openBtn, popupDiv, content, closeBtn) => {
    const open = document.querySelector(openBtn),
        popup = document.querySelector(popupDiv),
        popupContent = popup.querySelector(content);


    open.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    const clearInput = () => {
        const inputs = popupContent.querySelectorAll('input');

        inputs.forEach(elem => {
            elem.value = '';
        });
    };

    popup.addEventListener('click', event => {
        let target = event.target;

        if(target.closest(closeBtn)) {
            popup.style.display = "none";
            clearInput();
            const inputs = popup.querySelectorAll('input');
            inputs.forEach(elem => {
                elem.classList.remove('_error');
            });
            const pData = popup.querySelector('.personal-data');
			pData.style = 'background-color: transparent';
        } else {
            target = target.closest(content);
            if(!target) {
                popup.style.display = "none";
                clearInput();
                const inputs = popup.querySelectorAll('input');
                inputs.forEach(elem => {
                    elem.classList.remove('_error');
                });
                const pData = popup.querySelector('.personal-data');
		    	pData.style = 'background-color: transparent';
            }
        }
    });
};


export default formToggle;