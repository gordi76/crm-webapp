function toggleMenu() {
    //console.log("!clicked!")
    var sidebar = document.querySelector('.sidebar');
    var currentLeft = parseInt(sidebar.style.left, 10);
    var targetLeft = currentLeft === 0 ? -250 : 0;

    sidebar.style.left = targetLeft + 'px';
}