const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const port = 2600;
const app = express();

app.use(cors());
app.use(bodyParser.json());
let data = require('./data.json');

app.get('/', (req, res, next) => {
    res.status(200).send(data);
    console.log("GOT IT")
});

app.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if (!data.hasOwnProperty(id))
        res.status(404).send("Unable to find property")
    else 
        res.status(200).send(data[id])
})

app.patch('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    
    if (!data.hasOwnProperty(id)) {
        res.status(404).send("Unable to find property")
    }

    else {
        data[id] = body;
        newData = JSON.stringify(data);
        fs.writeFile('data.json', newData, (err) => {
            if(err) throw err;
            console.log("Updated data file")
        });
        res.status(200).send("Updated successfully");
    }
});

app.patch('/', (req, res) => {
    const body = req.body;
    newData = JSON.stringify(body)
    fs.writeFile('data.json', newData, (err) => {
        if (err) {
            res.status(500).send("Failed to update");
            throw err;
        }
        data = body;
        console.log("Updated data file");
    });
    res.status(200).send("Updated successfully");
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});