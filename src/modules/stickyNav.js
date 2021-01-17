const stickyNav = () => {
    
    const getY = (elem) => {
        let box = elem.getBoundingClientRect();

        return box.top + window.pageYOffset;
    };
 
    const nav = document.querySelector('.top-menu');
    const sticky = getY(nav);
            
    const handler = () => {
        if (window.pageYOffset >= sticky) {
            nav.classList.add("sticky");
        } else if (window.pageYOffset < sticky) {
            nav.classList.remove("sticky");
        }
    };

    const stick = () => {

        const widthWindow = document.documentElement.clientWidth;


        if (widthWindow < 768) {
            window.addEventListener('scroll', handler);
        } else if (widthWindow >= 768){
            window.removeEventListener('scroll', handler);
            nav.classList.remove("sticky");
        }
    };

    stick();

    window.addEventListener('resize', stick);


};

export default stickyNav;