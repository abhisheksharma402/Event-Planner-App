const {Client} = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'event_planner',
    password: 'postgres'
});

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


exports.client = client;