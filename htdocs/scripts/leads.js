document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('openLeadFormBtn').addEventListener('click', function () {
        document.getElementById('leadModal').style.display = 'block';
    });

    document.getElementsByClassName('close')[0].addEventListener('click', function () {
        document.getElementById('leadModal').style.display = 'none';
    });

    document.getElementById('leadForm').addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Form submitted');

        var formData = new FormData(this);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "index.php", true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                document.getElementById('leadModal').style.display = 'none';
            } else {
                console.error("Fehler beim Speichern des Leads:", xhr.statusText);
            }
        };

        xhr.send(formData);
    });
});