document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('openQuotationFormBtn').addEventListener('click', function () {
        document.getElementById('quotationModal').style.display = 'block';
    });

    document.getElementsByClassName('close')[0].addEventListener('click', function () {
        document.getElementById('quotationModal').style.display = 'none';
    });

    document.getElementById('quotationForm').addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Form submitted');

        var formData = new FormData(this);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "create_quotation.php", true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                document.getElementById('quotationModal').style.display = 'none';
            } else {
                console.error("Fehler beim Erstellen des Angebots:", xhr.statusText);
            }
        };

        xhr.send(formData);
    });
});