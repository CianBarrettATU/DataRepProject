const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cianscluster.qgdvl.mongodb.net/');

const gameSchema = new mongoose.Schema({
   title: String,
   year: String,
   developer: String,
   poster: String,
   rating: String
});

//test
const gameModel = mongoose.model('Game', gameSchema);

app.get('/api/games', async (req, res)=> {
    const games = await gameModel.find({});
    res.status(200).json({games})
});

app.get('/api/game/:id', async (req, res)=>{
    const game = await gameModel.findById(req.params.id);
    res.json(game);
})

app.put('/api/game/:id', async (req, res)=>{
    const game = await gameModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(game);
})

app.post('/api/games', async (req, res)=>{
    console.log("added: ",req.body.title);
    const {title, year, developer, poster, rating} = req.body;

    const newGame = new gameModel({title, year, developer, poster, rating});
    await newGame.save();

    res.status(201).json({"message":"game added!",Game:newGame});
})

app.listen(port, ()=> {
    console.log(`runnning on http://localhost:${port}`);
})

app.delete('/api/game/:id', async(req, res) => {
    console.log("deleting game w/ id:", req.params.id);
    const game = await gameModel.findByIdAndDelete(req.params.id);
    res.status(200).send({message: "game deleted", game});
});