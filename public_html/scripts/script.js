function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const currentLeft = parseInt(sidebar.style.left, 10);
    const targetLeft = currentLeft === 0 ? -250 : 0;
    sidebar.style.left = targetLeft + 'px';
}

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const leadsSearchInput = document.getElementById('leadsSearchInput');
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
            if(itemText.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

/*    leadsSearchInput.addEventListener('input', function () {
        const searchTerm = leadsSearchInput.value.toLowerCase();
        const tableRows = leadsTable.querySelectorAll('tr');
        tableRows.forEach(row => {
            const tableData = row.querySelectorAll('td');
            let rowVisible = false;
            tableData.forEach(cell => {
                const cellText = cell.textContent.toLowerCase();
                if(cellText.includes(searchTerm)) {
                    rowVisible = true;
                }
            });
            row.style.display = rowVisible ? '' : 'none';
        });
    });*/



    const earningsData = {
        labels: ['January','February','March','April','May','June','July','August', 'September','October','November', 'December'],
        datasets: [{
            label: 'Earnings',
            data: [2000, 1500, 1200, 1300, 2400, 1500, 1800, 1900, 1700, 2100, 2000, 1800],
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

    const earningChartElement = document.getElementById('earningChart');

    const earningChart = new Chart(earningChartElement, {
        type: 'line',
        data: earningsData,
        options: chartOptions
    });



    fetch('get_leads.php')
        .then(response => response.json())
        .then(data => {
            const leadsTable = document.getElementById('leadsList');

            const tableHeaderRow = document.createElement('tr');
            const headerList = ['First Name', 'Last Name', 'Email', 'Company'];
            headerList.forEach(header => {
                const tableHeader = document.createElement('th');
                tableHeader.textContent = header;
                tableHeaderRow.appendChild(tableHeader);
            });
            leadsTable.appendChild(tableHeaderRow);

            data.forEach(lead => {
                const tableRow = document.createElement('tr');
                const tableDataFirstName = document.createElement('td');
                tableDataFirstName.textContent = lead.first_name;
                tableRow.appendChild(tableDataFirstName);
                const tableDataLastName = document.createElement('td');
                tableDataLastName.textContent = lead.last_name;
                tableRow.appendChild(tableDataLastName);
                const tableDataEmail = document.createElement('td');
                tableDataEmail.textContent = lead.email;
                tableRow.appendChild(tableDataEmail);
                const tableDataCompany = document.createElement('td');
                tableDataCompany.textContent = lead.company;
                tableRow.appendChild(tableDataCompany)
                leadsTable.appendChild(tableRow);
            });

            leadsSearchInput.addEventListener('input', function () {
                const searchTerm = leadsSearchInput.value.toLowerCase();
                const tableRows = leadsTable.querySelectorAll('tr:not(:first-child)');

                tableRows.forEach(row => {
                    const tableData = row.querySelectorAll('td');
                    let rowVisible = false;
                    tableData.forEach(cell => {
                        const cellText = cell.textContent;
                        if(cellText.toLowerCase().includes(searchTerm)) {
                            rowVisible = true;
                            cell.innerHTML = cellText.replace(searchTerm, `<mark>${searchTerm}</mark>`);
                        } else {
                            cell.innerHTML = cellText;
                        }
                    });
                    row.style.display = rowVisible ? '' : 'none';
                });
            });
        })
        .catch(error => console.error('Fehler beim Abrufen der Leads:', error.message));
});
