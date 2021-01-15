const showGift = (openBtn, popupDiv, content, closeBtn) => {
    const open = document.querySelector(openBtn),
        popup = document.querySelector(popupDiv);

    if (open) {
            open.addEventListener('click', () => {
            popup.style.display = 'block';
            open.style.display = "none";
        });

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
    }

};


export default showGift;