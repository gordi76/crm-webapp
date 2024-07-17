document.addEventListener('DOMContentLoaded', function () {
    fetch('get_quotation.php')
        .then(response => response.json())
        .then(data => {
            const quotationSearchInput = document.getElementById('quotationSearchInput');
            const quotationTable = document.getElementById('quotationList');
            const tableHeaderRow = document.createElement('tr');
            const headerList = ['Id','Part', 'Part No', 'Company', 'Price', 'Address', 'Created At'];
            headerList.forEach(header => {
                const tableHeader = document.createElement('th');
                tableHeader.textContent = header;
                tableHeaderRow.appendChild(tableHeader);
            });
            quotationTable.appendChild(tableHeaderRow);
            data.forEach(quotation => {
                const tableRow = document.createElement('tr');
                const tableDataId = document.createElement('td');
                tableDataId.textContent = quotation.id;
                tableRow.appendChild(tableDataId);
                const tableDataPart = document.createElement('td');
                tableDataPart.textContent = quotation.part;
                tableRow.appendChild(tableDataPart);
                const tableDataPartNo = document.createElement('td');
                tableDataPartNo.textContent = quotation.part_no;
                tableRow.appendChild(tableDataPartNo);
                const tableDataCustomer = document.createElement('td');
                tableDataCustomer.textContent = quotation.customer;
                tableRow.appendChild(tableDataCustomer);
                const tableDataPrice = document.createElement('td');
                tableDataPrice.textContent = quotation.price;
                tableRow.appendChild(tableDataPrice);
                const tableDataAddress = document.createElement('td');
                tableDataAddress.textContent = quotation.address;
                tableRow.appendChild(tableDataAddress);
                const tableDataCreatedAt = document.createElement('td');
                tableDataCreatedAt.textContent = quotation.created_at;
                tableRow.appendChild(tableDataCreatedAt);
                quotationTable.appendChild(tableRow);
            });

            quotationSearchInput.addEventListener('input', function () {
                const searchTerm = quotationSearchInput.value.toLowerCase();
                const tableRows = quotationTable.querySelectorAll('tr:not(:first-child)');

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