const express = require('express')
const app = express()
var path = require('path');
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '/assets')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



/** 
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
*/