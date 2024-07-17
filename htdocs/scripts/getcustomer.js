document.addEventListener('DOMContentLoaded', function () {
    fetch('get_customer.php')
        .then(response => response.json())
        .then(data => {
            const customerSearchInput = document.getElementById('customerSearchInput');
            const customerTable = document.getElementById('customerList');
            const tableHeaderRow = document.createElement('tr');
            const headerList = ['Id','Company', 'Email', 'Phone', 'Contact', 'Address', 'Created At'];
            headerList.forEach(header => {
                const tableHeader = document.createElement('th');
                tableHeader.textContent = header;
                tableHeaderRow.appendChild(tableHeader);
            });
            customerTable.appendChild(tableHeaderRow);
            data.forEach(customer => {
                const tableRow = document.createElement('tr');
                const tableDataId = document.createElement('td');
                tableDataId.textContent = customer.id;
                tableRow.appendChild(tableDataId);
                const tableDataCompany = document.createElement('td');
                tableDataCompany.textContent = customer.company;
                tableRow.appendChild(tableDataCompany);
                const tableDataEmail = document.createElement('td');
                tableDataEmail.textContent = customer.email;
                tableRow.appendChild(tableDataEmail);
                const tableDataPhone = document.createElement('td');
                tableDataPhone.textContent = customer.phone;
                tableRow.appendChild(tableDataPhone);
                const tableDataContact = document.createElement('td');
                tableDataContact.textContent = customer.contact;
                tableRow.appendChild(tableDataContact);
                const tableDataAddress = document.createElement('td');
                tableDataAddress.textContent = customer.address;
                tableRow.appendChild(tableDataAddress);
                const tableDataCreatedAt = document.createElement('td');
                tableDataCreatedAt.textContent = customer.created_at;
                tableRow.appendChild(tableDataCreatedAt);
                customerTable.appendChild(tableRow);
            });

            customerSearchInput.addEventListener('input', function () {
                const searchTerm = customerSearchInput.value.toLowerCase();
                const tableRows = customerTable.querySelectorAll('tr:not(:first-child)');

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