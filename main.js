// const request = require("request");
// const express = require('express');
// const app = express()

// const openLibrary = "https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback";

// app.get();
// app.post();
function search() {
    document.getElementById('results').innerHTML = "";
    fetch("http://openlibrary.org/search.json?q=" + document.getElementById("search").value)
        .then(a => a.json())
        .then(response => {
            for (let i = 0; i < 25; i++) {
                document.getElementById('results').innerHTML += "<h2>" + response.docs[i].title + "</h2>" + response.docs[i].author_name[0] + "<br><img src='http://covers.openlibrary.org/b/isbn/>" + response.docs[i].isbn[0] + "-M.jpeg"
            }
    })
}