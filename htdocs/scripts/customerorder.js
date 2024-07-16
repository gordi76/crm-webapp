document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('openOrderFormBtn').addEventListener('click', function () {
        document.getElementById('orderModal').style.display = 'block';
    });

    document.getElementsByClassName('close')[0].addEventListener('click', function () {
        document.getElementById('orderModal').style.display = 'none';
    });

    document.getElementById('orderForm').addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Form submitted');

        var formData = new FormData(this);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "create_customer_order.php", true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                document.getElementById('orderModal').style.display = 'none';
            } else {
                console.error("Fehler beim Erfassen der Bestellung:", xhr.statusText);
            }
        };

        xhr.send(formData);
    });
});