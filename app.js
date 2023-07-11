const menu = document.getElementById('mobile-menu')
const menuLinks = document.getElementById('navbar_menu')

document.onclick = function(e) {
    if (e.target.id !== 'mobile-menu' && e.target.id !== 'navbar_menu') {
        menu.classList.remove('active');
        menuLinks.classList.remove('active');
    }
}

menu.addEventListener('click', function(){
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
})