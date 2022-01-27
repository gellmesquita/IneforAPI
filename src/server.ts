import express from "express";
import route from './Routes'
import cors from 'cors';
import path from 'path';
import bodyParser from "body-parser";
const app= express();
app.use('/upload', express.static(path.resolve(__dirname, '..','upload')) );
app.use(express.static(path.resolve(__dirname, '..','public')))
app.set('view engine', 'ejs')
app.use(cors());
app.use(express.json());
app.use(route);
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())






app.listen(1111, () => {
    console.log('Created');
})