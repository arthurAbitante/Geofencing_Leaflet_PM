const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'fencing'
});

db.connect(err => {
    if(err){
        console.error('Error connecting to the database', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.use(cors());

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('API is running.');
});

app.post('/api/shapes', (req, res) => {
    const {id, shape_type, coordinates, cutted} = req.body;

    const sql = 'INSERT INTO shapes (id, shape_type, coordinates, cutted) VALUES (?, ?, ?, ?)';

    db.query(sql, [id, shape_type, JSON.stringify(coordinates), cutted], (err, result) => {
        if(err){
            console.error('Error inserting data:', err);
            res.status(500).send('Error saving shape data.');
        }else{
            res.send({message: 'Shape saved successfully!', id: result.insertId});
        }
    });
});

app.get('/api/shapes', (req, res) => {
    const sql =  'SELECT * FROM shapes';
    db.query(sql, (err, results) => {
        if(err){
            console.error('Error fetching shapes:', err);
            res.status(500).send('Error fetching shapes.');
        }else{
            res.json(results);
        }
    });
});

app.put('/api/shapes/:id', (req, res) => {
    const {id} = req.params;
    const {shape_type, coordinates, cutted} = req.body;
    const sql = 'UPDATE shapes SET shape_type = ?, coordinates = ?, cutted =? WHERE id = ?';
    db.query(sql, [shape_type, JSON.stringify(coordinates), cutted, id], (err, result) => {
        if(err){
            console.error('Error updating shape:', err);
            res.status(500).send('Error updating shape.');
        }else if(result.affectedRows === 0){
            res.status(404).send('Shape not found.');
        }else{
            res.send('Shape updated successfully.');
        }
    });
});

app.delete('/api/shapes/:id', (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM shapes WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if(err){
            console.error('Error deleting shape:', err);
            res.status(500).send('Error deleting shape.');
        }else if(result.affectedRows === 0){
            res.status(404).send('Shape not found.');
        }else{
            res.send('Shape deleted successfully');
        }
    });
});



app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`);
});

