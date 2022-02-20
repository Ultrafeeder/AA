
// // const request = require("request");
// const http = require('http');
// const express = require('express');
// const bodyParser = require('body-parser');
// const { urlencoded } = require('express');
// const app = express();

// http.createServer((_, res) => {
//     res.write('we are live!');
//     res.end()
// }).listen(3000);
// // const server = app.listen(3000, () => {
// //     console.log('server running on port 3000')
// // });
//  const url = "http://openlibrary.org/search.json?q=the+giver"
// app.use(bodyParser, urlencoded({
//     extended: true
// }));

// app.get('/books', (req, res) => {
//     req.url('http://openlibrary.org/search.json?q=the+giver').docs;
//     res.
// })


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

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

