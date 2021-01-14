const clubsList = () => {
    const list = document.querySelector('.clubs-list'),
        listUl = list.querySelector('ul');

    list.addEventListener('click', () => {
        
        if (listUl.style.display === 'none'|| listUl.style.display === '') {
            listUl.style.display = 'block';
        } else {
            listUl.style.display = 'none';
        }
    });
};

export default clubsList;
