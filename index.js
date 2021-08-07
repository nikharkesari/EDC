const express = require('express');
const datastore = require('nedb');
const app = express();
app.listen(3000, () => console.log('listening...'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});

app.post('/api', (request, response) => {
    const data = request.body;
    database.insert(data);
    response = 'data posted successfully';
});