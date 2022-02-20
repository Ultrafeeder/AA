import fetch from "node-fetch";
import express from "express";
import bodyParser from "body-parser";
const app = express();
// const nodeFetch = require('node-fetch')

let response = fetch("http://openlibrary.org/search.json?q=the+giver").then(response => response.json()
        .then(data => console.log(data)))

    console.log(response)