function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const currentLeft = parseInt(sidebar.style.left, 10);
    const targetLeft = currentLeft === 0 ? -250 : 0;
    sidebar.style.left = targetLeft + 'px';
}

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const sidebarItems = document.querySelectorAll('.sidebar ul li');
    const profileLink = document.getElementById('profileLink');
    const profileDropdown = document.getElementById('profileDropdown');

    profileLink.addEventListener('click', function (e) {
        e.preventDefault();
        if (profileDropdown.style.display === 'block') {
            profileDropdown.style.display = 'none';
        } else {
            profileDropdown.style.display = 'block';
        }
    });

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        sidebarItems.forEach(function (item) {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    const earningsData = {
        labels: [],
        datasets: [{
            label: 'Earnings',
            data: [],
            fill: false,
            borderColor: 'rgb(0,123,255)',
            tension: 0.4
        }]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const earningChartElement = document.getElementById('earningsChart');
    console.log(earningChartElement);

    if (earningChartElement) {
        const earningChart = new Chart(earningChartElement.getContext('2d'), {
            type: 'line',
            data: earningsData,
            options: chartOptions
        });

        function fetchEarningsTableData() {
            fetch('get_sales.php')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const labels = [
                        'January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'
                    ];
                    const earnings = data.map(item => parseFloat(item.sales_value));

                    updateChart(labels, earnings);
                })
                .catch(error => console.error('Fehler beim Abrufen der Daten:', error));
        }

        function updateChart(labels, data) {
            earningsData.labels = labels;
            earningsData.datasets[0].data = data;
            earningChart.update();
        }

        fetchEarningsTableData();
    } else {
        console.error('Das Canvas-Element wurde nicht gefunden.');
    }

    function fetchSalesData() {
        fetch('get_sales.php')
            .then(response => response.json())
            .then(data => {
                const totalSales = data.reduce((sum, item) => sum + parseFloat(item.sales_value), 0);
                updateSalesTile(totalSales);
            })
    }

    function updateSalesTile(totalSales) {
        const salesTile = document.querySelector('.sales-tiles:first-of-type button'); // für Sales
        salesTile.textContent = `$${totalSales.toLocaleString()}`;
    }

    function fetchEarningsData() {
        fetch('get_earnings.php')
            .then(response => response.json())
            .then(data => {
                const totalEarnings = data.reduce((sum, item) => sum + parseFloat(item.earnings_value), 0);
                updateEarningsTile(totalEarnings);
            })
    }

    function updateEarningsTile(totalEarnings) {
        const earningsTile = document.querySelectorAll('.sales-tiles')[1].querySelector('button');
        earningsTile.textContent = `$${totalEarnings.toLocaleString()}`;
    }

    function fetchPendingsData() {
        fetch('get_pendings.php')
            .then(response => response.json())
            .then(data => {
                const totalPendings = data.reduce((sum, item) => sum + parseFloat(item.price), 0);
                updatePendingsTile(totalPendings);
            })
    }

    function updatePendingsTile(totalPendings) {
        const pendingsTile = document.querySelectorAll('.sales-tiles')[2].querySelector('button');
        pendingsTile.textContent = `$${totalPendings.toLocaleString()}`;
    }

    fetchSalesData();
    fetchEarningsData();
    fetchPendingsData();

});