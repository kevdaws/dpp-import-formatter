const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');

const app = express();

const upload = multer({ dest: 'uploads/' });

app.use(cors());

app.post('/', upload.single('file'), (req, res) => {
    
    if(!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    
    const fileResults = [];

    console.log(req.file.originalname);
    console.log(req.file.path);

    const filePath = req.file.path

    fs.createReadStream(filePath).pipe(csv({})).on('data', data => fileResults.push(data)).on('end', () => {
        console.log(fileResults);

    const headerResults = Object.keys(fileResults[0]);
    console.log(headerResults);

    res.send(headerResults);

    })
})

app.post('/build', (req, res) => {
    //console.log(res);

    res.send()
})

const port = 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
})