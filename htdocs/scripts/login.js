function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (getQueryParam('error') === '1') {
        document.getElementById('error-message').style.display = 'block';
    }
});