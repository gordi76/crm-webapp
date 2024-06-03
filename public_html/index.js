const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');
const {insertLead} = require("./db");

const app = express();
const staticPath = path.join(__dirname, 'public');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/newlead', (req, res) => {
    const newLead = req.body;
    //console.log('test');
    insertLead(newLead, (error, result) => {
        if(error) {
            console.error('Error inserting lead into database: ', error);
            res.status(500).send('Error creating Lead');
            return;
        }
        console.log('Lead inserted into database', result);
        res.status(200).send('Lead created successfully');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is on port ${PORT}`);
});

//Test-Abfrage:
/*
db.query('SELECT * FROM leads', (err, results) => {
    if (err) {
        console.error('Fehler beim Ausführen der Abfrage: ' + err.stack);
        return;
    }
    console.log('Ergebnisse der Abfrage: ', results);
});
*/