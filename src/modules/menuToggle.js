const menuToggle = () => {
    const body = document.querySelector('body'),
        menu = document.querySelector('.popup-menu');

    const handler = () => {
        menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.menu-btn') || target.closest('.close-menu-btn') || target.closest('.menu-item')) {
            handler();
        } else if (menu.classList.contains('active-menu')) {
            handler();
        }
    });
};

export default menuToggle;