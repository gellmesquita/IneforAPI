import express from "express";
import route from './Routes'
import cors from 'cors';
import path from 'path';

const app= express();
app.use(cors());
app.use(express.json());
app.use(route);
app.use('/upload', express.static(path.resolve(__dirname, '..','upload')) );




app.listen(1111, () => {
    console.log('Created');
})