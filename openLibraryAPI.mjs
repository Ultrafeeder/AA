import fetch from "node-fetch";
import express, { query } from "express";
import bodyParser from "body-parser";
import jsdom from "jsdom";
const app = express();
// const nodeFetch = require('node-fetch')

let response = fetch(`http://openlibrary.org/search.json?q=${query}`).then(response => response.json()
        .then(data => console.log(data)))

    console.log(response)