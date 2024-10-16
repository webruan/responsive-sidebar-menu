let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.home-content');

let subMenu = document.querySelectorAll('.subMenu');
let noMenu = document.querySelectorAll('.noSubMenu');

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});

subMenu.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
        subMenu.forEach(a => a.classList.remove('showMenu'));
        subMenu[index].classList !== 'showMenu'
        ? subMenu[index].classList.add('showMenu')
        : subMenu[index].classList.remove('showMenu');
    });
});



