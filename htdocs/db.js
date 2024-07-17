const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhostel',
    user: 'root',
    database: 'crm_database',
    password: 'crmdashboard'
});

connection.connect((err) => {
    if(err) {
        console.error('Fehler beim Verbinden zur Datenbank: ' + err.stack);
        return;

    }
    console.log('Erfolgreich mit Datenbank verbunden');
});

function insertLead(newLead, callback) {
    const insertQuery = 'INSERT INTO crm_dashboard.leads SET ?';

    connection.query(insertQuery, newLead, (error, results) => {
        if(error) {
            console.error('Fehler beim Einfügen des Leads', error);
            callback(error, null);
            return;
        } else {
            console.log('Lead erfolgreich eingefügt', results);
            connection.commit((commitError) => {
                if(commitError) {
                    console.error('Fehler beim Commit der Transaktion: ', commitError);
                    callback(commitError, null);
                } else {
                    console.log('Transaktion erfolgreich committed');
                    callback(null, results);
                }
            });
        }
    });
}

module.exports = {
    connection,
    insertLead
};