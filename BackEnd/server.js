const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

const mockGames = [
    {
        title: "The Legend of Zelda",
        year: "1986",
        developer: "Nintendo",
        poster: "https://example.com/zelda-poster.jpg"
    },
    {
        title: "Super Mario Bros.",
        year: "1985",
        developer: "Nintendo",
        poster: "https://example.com/mario-poster.jpg"
    },
    {
        title: "Minecraft",
        year: "2011",
        developer: "Mojang Studios",
        poster: "https://example.com/minecraft-poster.jpg"
    }
];


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cianscluster.qgdvl.mongodb.net/');

const gameSchema = new mongoose.Schema({
   title: String,
   year: String,
   developer: String,
   poster: String
});

//test
const gameModel = mongoose.model('Game', gameSchema);

app.get('/api/games', async (req, res)=> {
    const games = await gameModel.find({});
    res.status(200).json({games})
});

app.post('/api/games', async (req, res)=>{
    console.log(req.body.title);
    const {title, year, developer, poster} = req.body;

    const newGame = new gameModel({title, year, developer, poster});
    await newGame.save();

    res.status(201).json({"message":"game added!",Game:newGame});
})

app.listen(port, ()=> {
    console.log(`runnning on http://localhost:${port}`);
});