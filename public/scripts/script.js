function toggleMenu() {
    //console.log("!clicked!")
    var sidebar = document.querySelector('.sidebar');
    var currentLeft = parseInt(sidebar.style.left, 10);
    var targetLeft = currentLeft === 0 ? -250 : 0;

    sidebar.style.left = targetLeft + 'px';
}
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    var sidebarItems = document.querySelectorAll('.sidebar ul li');
    var profileLink = document.getElementById('profileLink');
    var profileDropdown = document.getElementById('profileDropdown');

    profileLink.addEventListener('click', function (e) {
        e.preventDefault();
        if (profileDropdown.style.display === 'block') {
            profileDropdown.style.display = 'none';
        } else {
            profileDropdown.style.display = 'block';
        }
    });

    searchInput.addEventListener('input', function () {
        var searchTerm = searchInput.value.toLowerCase();

        sidebarItems.forEach(function (item) {
            var itemText = item.textContent.toLowerCase();

            if(itemText.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const earningsData = {
        labels: ['January','February','March','April','May','June','July','August', 'September','October','November', 'December'],
        datasets: [{
            label: 'Earnings',
            data: [2000, 1500, 1200, 1300, 2400, 1500, 1800, 1900, 1700, 2100, 2000, 1800],
            fill: false,
            borderColor: 'rgb(0,123,255)',
            //borderColor: 'rgb(75, 192, 192)',
            tension: 0.4
        }]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const earningChartElement = document.getElementById('earningChart');

    const earningChart = new Chart(earningChartElement, {
        type: 'line',
        data: earningsData,
        options: chartOptions
    });
});

/*
Chart.defaults.roundedLine = Chart.helpers.clone(Chart.defaults.line);

Chart.controllers.roundedLine = Chart.controllers.line.extend({
    draw: function(ease) {
        Chart.controllers.line.prototype.draw.call(this, ease);

        var ctx = this.chart.chart.ctx;
        var meta = this.getMeta();

        if (!meta.dataset._path) {
            meta.dataset._path = [];
        }

        meta.dataset._path = meta.dataset._path.map(function (path, i) {
            if (i === 0) {
                return path;
            }
            var prev = meta.dataset._path[i - 1];
            var xc = (prev.controlPointNextX + path.x) / 2;
            var yc = (prev.controlPointNextY + path.y) / 2;
            return {x: xc, y: yc};
        });

        meta.dataset._path.forEach(function(path, i) {
            if (i === 0) {
                ctx.moveTo(path.x, path.y);
            } else {
                var prev = meta.dataset._path[i - 1];
                var xc = (prev.x + path.x) / 2;
                var yc = (prev.y + path.y) / 2;
                ctx.quadraticCurveTo(prev.x, prev.y, xc, yc);
            }
        });

        ctx.lineWidth = this.getDataset().lineWidth || this.chart.options.elements.line.borderWidth;
        ctx.strokeStyle = this.getDataset().borderColor;
        ctx.stroke();
    }
});

var ctx = document.getElementById("earningChart").getContext("2d");
var earningChart = new Chart(ctx, {
    type: 'roundedLine',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Sales',
            data: [2000, 1500, 1200, 1300, 2400, 1500, 1800, 1900, 1700, 2100, 2000, 1800],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
*/


document.addEventListener('DOMContentLoaded', function () {
document.getElementById('openLeadFormBtn').addEventListener('click', function () {
    document.getElementById('leadModal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function () {
    document.getElementById('leadModal').style.display = 'none';
});

document.getElementById('leadForm').addEventListener('submit', function (event) {
    event.preventDefault();
    //hier code zum speichern des leads in datenbank (z.b. ajax anfrage an server)
    console.log('Lead gespeichert');
    document.getElementById('leadModal').style.display = 'none';
});
});