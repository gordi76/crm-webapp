document.addEventListener('DOMContentLoaded', function () {
    fetch('get_customer_orders.php')
        .then(response => response.json())
        .then(data => {
            const ordersSearchInput = document.getElementById('ordersSearchInput');
            const orderTable = document.getElementById('ordersList');
            const tableHeaderRow = document.createElement('tr');
            const headerList = ['Order No', 'Part', 'Part No', 'Customer', 'Sales Value', 'Created At'];
            headerList.forEach(header => {
                const tableHeader = document.createElement('th');
                tableHeader.textContent = header;
                tableHeaderRow.appendChild(tableHeader);
            });
            orderTable.appendChild(tableHeaderRow);
            data.forEach(order => {
                const tableRow = document.createElement('tr');
                const tableDataOrderNo = document.createElement('td');
                tableDataOrderNo.textContent = order.order_no;
                tableRow.appendChild(tableDataOrderNo);
                const tableDataPart = document.createElement('td');
                tableDataPart.textContent = order.part;
                tableRow.appendChild(tableDataPart);
                const tableDataPartNo = document.createElement('td');
                tableDataPartNo.textContent = order.part_no;
                tableRow.appendChild(tableDataPartNo);
                const tableDataCustomer = document.createElement('td');
                tableDataCustomer.textContent = order.customer;
                tableRow.appendChild(tableDataCustomer);
                const tableDataSalesValue = document.createElement('td');
                tableDataSalesValue.textContent = order.sales_value;
                tableRow.appendChild(tableDataSalesValue);
                const tableDataCreatedAt = document.createElement('td');
                tableDataCreatedAt.textContent = order.created_at;
                tableRow.appendChild(tableDataCreatedAt);
                orderTable.appendChild(tableRow);
            });

            ordersSearchInput.addEventListener('input', function () {
                const searchTerm = ordersSearchInput.value.toLowerCase();
                const tableRows = orderTable.querySelectorAll('tr:not(:first-child)');

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