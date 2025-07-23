import express from 'express';
import { PORT } from './config.js';

const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello')
})


app.listen(PORT, ()=>{
    console.log(`port running ${PORT}`)
})