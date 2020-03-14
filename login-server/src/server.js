import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => console.log(`Web app listening on port ${port}`));