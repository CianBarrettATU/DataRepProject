const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

const cors = require('cors');
const { toBeInTheDOM } = require('@testing-library/jest-dom/dist/matchers');

mongoose.connect('mongodb+srv://admin:<db_password>@cianscluster.qgdvl.mongodb.net/?retryWrites=true&w=majority&appName=cianscluster');

const songSchema = new mongoose.Schema({
   title: String,
   artist: String,
});

const Song = mongoose.model('Song', songSchema);

app.listen(port, ()=> {
    console.log(`runnning on http://localhost:${port}`);
});

app.post('/api/songs', async (req, res)=> {

})