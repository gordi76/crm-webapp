document.addEventListener('DOMContentLoaded', function () {

    // Funktion zum Abrufen und Anzeigen der Customer Orders
    function fetchCustomerOrders() {
        fetch('get_customer_orders.php')
            .then(response => response.json())
            .then(data => {
                const ordersList = document.getElementById('ordersList');
                ordersList.innerHTML = ''; // Liste zurücksetzen

                data.forEach(order => {
                    const orderItem = document.createElement('li');
                    orderItem.textContent = order.customerName + ' - ' + order.orderDescription;
                    ordersList.appendChild(orderItem);
                });
            })
            .catch(error => console.error('Fehler beim Abrufen der Customer Orders:', error.message));
    }

    // Event Listener für das Öffnen des Modal zur Order-Erstellung
    document.getElementById('openOrderFormBtn').addEventListener('click', function () {
        document.getElementById('orderModal').style.display = 'block';
    });

    // Event Listener für das Schließen des Modals
    document.getElementsByClassName('close')[0].addEventListener('click', function () {
        document.getElementById('orderModal').style.display = 'none';
    });

    // Event Listener für das Absenden des Order-Formulars
    document.getElementById('orderForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var formData = new FormData(this);

        fetch('create_customer_order.php', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    console.log('Customer Order erfolgreich erstellt.');
                    document.getElementById('orderModal').style.display = 'none';
                    fetchCustomerOrders(); // Aktualisiere die Orders nach Erstellung
                } else {
                    console.error('Fehler beim Erstellen der Customer Order:', response.statusText);
                }
            })
            .catch(error => console.error('Fehler beim Erstellen der Customer Order:', error.message));
    });

    // Initialisiere die Seite mit den vorhandenen Customer Orders
    fetchCustomerOrders();
});
