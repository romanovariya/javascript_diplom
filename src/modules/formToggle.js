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
        } else {
            target = target.closest(content);
            if(!target) {
                popup.style.display = "none";
                clearInput();
            }
        }
    });
};


export default formToggle;