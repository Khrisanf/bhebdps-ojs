document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', function (event) {
        const subMenu = this.nextElementSibling;

        if (subMenu && subMenu.classList.contains('menu_sub')) {
            event.preventDefault();

            const activeMenu = this.closest('.menu').querySelector('.menu_sub.menu_active');
            if (activeMenu && activeMenu !== subMenu) {
                activeMenu.classList.remove('menu_active');
            }

            subMenu.classList.toggle('menu_active');
        }
    });
});
