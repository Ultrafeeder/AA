const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

 const url = "http://openlibrary.org/search.json?q=the+giver"


app.get('/', (req, res) => {
    res.send('trying to get books?')
})

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



