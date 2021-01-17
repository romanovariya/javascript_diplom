const modalMenu = () => {

    const changeMenu = () => {
        const widthWindow = document.documentElement.clientWidth,
        menu = document.querySelector('.hidden-small'),
        mobile = document.querySelector('.hidden-large');
        if (widthWindow < 768) {
            menu.style.display = 'none';
            mobile.style.display = 'block';
        } else {
            mobile.style.display = 'none';
            menu.style.display = 'flex';
        }
    };
    changeMenu();
    window.addEventListener('resize',  () => {
        
        changeMenu();
        
    });
};

export default modalMenu;