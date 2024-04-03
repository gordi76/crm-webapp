function toggleMenu() {
    //console.log("!clicked!")
    var sidebar = document.querySelector('.sidebar');
    var currentLeft = parseInt(sidebar.style.left, 10);
    var targetLeft = currentLeft === 0 ? -250 : 0;

    sidebar.style.left = targetLeft + 'px';
}
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    var sidebarItems = document.querySelectorAll('.sidebar ul li');
    var profileLink = document.getElementById('profileLink');
    var profileDropdown = document.getElementById('profileDropdown');

    profileLink.addEventListener('click', function (e) {
        e.preventDefault();
        if (profileDropdown.style.display === 'block') {
            profileDropdown.style.display = 'none';
        } else {
            profileDropdown.style.display = 'block';
        }
    });

    searchInput.addEventListener('input', function () {
        var searchTerm = searchInput.value.toLowerCase();

        sidebarItems.forEach(function (item) {
            var itemText = item.textContent.toLowerCase();

            if(itemText.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});