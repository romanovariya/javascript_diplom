const closeModal = (popupDiv, content, closeBtn) => {
    const popup = document.querySelector(popupDiv);

    popup.addEventListener('click', event => {
        let target = event.target;

        if(target.closest(closeBtn)) {
            popup.style.display = "none";
        } else {
            target = target.closest(content);
            if(!target) {
                popup.style.display = "none";
            }
        }
    });
};


export default closeModal;