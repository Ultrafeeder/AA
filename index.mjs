import fetch from "node-fetch";
import express from "express";
import bodyParser from "body-parser";
const app = express();
// const nodeFetch = require('node-fetch')

let response = fetch("http://openlibrary.org/search.json?q=the+giver").then(response => response.json())

    console.log(response)
app.get('/books', (req, res) => {
    
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



