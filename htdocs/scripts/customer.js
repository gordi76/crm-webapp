document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('openCustomerFormBtn').addEventListener('click', function () {
        document.getElementById('customerModal').style.display = 'block';
    });

    document.getElementsByClassName('close')[0].addEventListener('click', function () {
        document.getElementById('customerModal').style.display = 'none';
    });

    document.getElementById('customerForm').addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Form submitted');

        var formData = new FormData(this);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "create_customer.php", true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                document.getElementById('customerModal').style.display = 'none';
            } else {
                console.error("Fehler beim Erfassen des Kunden:", xhr.statusText);
            }
        };

        xhr.send(formData);
    });
});