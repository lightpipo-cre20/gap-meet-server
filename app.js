import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./src/routes/index.js";

const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('hello NodeJs');
})
app.listen(3000, () => console.log('3000번 포트 대기'));