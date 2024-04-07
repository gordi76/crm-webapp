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

document.addEventListener('DOMContentLoaded', function () {
    const earningsData = {
        labels: ['January','February','March','April','May','June','July','August', 'September','October','November', 'December'],
        datasets: [{
            label: 'Earnings',
            data: [2000, 1500, 1200, 1300, 2400, 1500, 1800, 1900, 1700, 2100, 2000, 1800],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const earningChartElement = document.getElementById('earningChart');

    const earningChart = new Chart(earningChartElement, {
        type: 'line',
        data: earningsData,
        options: chartOptions
    });
});

document.addEventListener('DOMContentLoaded', function () {
document.getElementById('openLeadFormBtn').addEventListener('click', function () {
    document.getElementById('leadModal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function () {
    document.getElementById('leadModal').style.display = 'none';
});

document.getElementById('leadForm').addEventListener('submit', function (event) {
    event.preventDefault();
    //hier code zum speichern des leads in datenbank (z.b. ajax anfrage an server)
    console.log('Lead gespeichert');
    document.getElementById('leadModal').style.display = 'none';
});
});