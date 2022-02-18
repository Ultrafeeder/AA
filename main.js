// const request = require("request");
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

http.createServer((_, res) => {
    res.write('we are live!');
    res.end()
}).listen(3000);
// const server = app.listen(3000, () => {
//     console.log('server running on port 3000')
// });


app.get('/books', (req, res) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
    const url = "http://openlibrary.org/search.json?q=the+giver"
})


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

