document.addEventListener('DOMContentLoaded', function () {
    fetch('get_leads.php')
        .then(response => response.json())
        .then(data => {
            const leadsTable = document.getElementById('leadsList');
            const leadsSearchInput = document.getElementById('leadsSearchInput');
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
                        if (cellText.toLowerCase().includes(searchTerm)) {
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
});