//não usar api mas enviar direto para o br


const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',    // Your MySQL host
  user: 'root',         // Your MySQL username
  password: '123456', // Your MySQL password
  database: 'fencing'  // Your database name
});

// JSON data to be stored
const polygonCoords = [
  [40.7128, -74.0060],
  [34.0522, -118.2437],
  [51.5074, -0.1278]
];

// Insert the JSON data into the MySQL database
const query = 'INSERT INTO polygons (coordinates) VALUES (?)';

connection.query(query, [JSON.stringify(polygonCoords)], (error, results) => {
  if (error) {
    return console.error('Error inserting data: ', error);
  }

  console.log('Data inserted, ID:', results.insertId);
  
  // Close the connection after the operation
  connection.end();
});