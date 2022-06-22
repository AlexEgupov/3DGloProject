const smoothScroll = () => {
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const mainBtn = document.querySelector('main a');
    const serviceBlock = document.getElementById('service-block');

    mainBtn.addEventListener('click', (item) => {
        item.preventDefault();
        serviceBlock.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', (item) => {
            item.preventDefault();
            const id = menuItem.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });


};

export default smoothScroll;