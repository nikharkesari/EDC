const express = require('express');
const datastore = require('nedb');
const app = express();
app.listen(3000, () => console.log('listening...'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new datastore('databse.db');
database.loadDatabase();

app.get('/api', (request, response) => {
    response.json({ a: 1 });
});

app.post('/api', (request, response) => {
    const data = request.body;
    console.log(data);
    database.insert({ b: 2 });
    console.log(database);
    response = 'data posted successfully';
});