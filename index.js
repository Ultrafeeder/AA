const fs = require('fs')
const http = require('http')
const data = require('./users.json')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/user', (req, res) => {
    let eData = JSON.stringify(data)
    res.send(eData);
})

app.post('/user', (req, res) => {
    const eData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        id: data.user.length + 1
    }
    if (!eData) {
        res.status(404).send('invalid user')
    } else {
        data.user.push(eData);
        res.send(eData);
        console.log(eData)
    }
return
})

const port = 3000;
app.listen(port, () => console.log(`Hello from ${port}`))


// const openLibrary = "https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback";

// app.get();
// app.post();
// function search() {
//     document.getElementById('results').innerHTML = "";
//     fetch("http://openlibrary.org/search.json?q=" + document.getElementById("search").value)
//         .then(a => a.json())
//         .then(response => {
//             console.log(response)
//             for (let i = 0; i < 25; i++) {
//                 document.getElementById('results').innerHTML += "<h2>" + response.docs[i].title + "</h2>" + response.docs[i].author_name[0] + "<br><img src=http://covers.openlibrary.org/b/isbn/" + response.docs[i].isbn[0] + ".jpeg>"
//             }
//     })
// }

// let type = 'title';
// let value = 'giver';
// const readAPI = `http://openlibrary.org/api/volumes/brief/${type}/${value}.json`

// // fetch(readAPI);



