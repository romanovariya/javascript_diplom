const clubsList = () => {
    const list = document.querySelector('.club-select'),
        listUl = list.querySelector('ul');

    list.addEventListener('click', (event) => {
        const target = event.target;

        const handler = () => {
            if (listUl.style.display === 'none'|| listUl.style.display === '') {
            listUl.style.display = 'block';
            } else {
                listUl.style.display = 'none';
            }
        };
        if (target.classList.contains('choose')) {
            handler();
        } else if (target.classList.contains('clubs-item')) {
            handler();
        }
        
    });
};

export default clubsList;
