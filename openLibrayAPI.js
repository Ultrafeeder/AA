const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

const port = 3000;

let books = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {

})

app.listen(port, () => console.log(`hello from ${port}`));