const $navBar = document.querySelectorAll('.nav-bar')[0];
window.addEventListener('scroll',  toggleNavBar,false);
function toggleNavBar() {  
    if (window.pageYOffset >= 160) {
        $navBar.classList.remove('abs-pos');
        $navBar.classList.add('fix-pos');
    } else if (window.pageYOffset < 160) {
        $navBar.classList.add('abs-pos');
        $navBar.classList.remove('fix-pos');
    }
}