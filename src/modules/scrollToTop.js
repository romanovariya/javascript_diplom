const scrollToTop = () => {

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 700) {
      	document.getElementById('totop').style.display = 'block';
      } else {
      	document.getElementById('totop').style.display = 'none';
      }
    });
};

export default scrollToTop;