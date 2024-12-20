const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

//cors headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//middleware to handle urls and json payloads
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

//mongoose connects to mongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cianscluster.qgdvl.mongodb.net/');

//defining game schema
const gameSchema = new mongoose.Schema({
   title: String,
   year: String,
   developer: String,
   poster: String,
   rating: String,
   review: [
    {
        content: String,
        recommend: String
    }
   ]
});

//model for game collection
const gameModel = mongoose.model('Game', gameSchema);

//get req to get all games
app.get('/api/games', async (req, res)=> {
    const games = await gameModel.find({});
    res.status(200).json({games})
});

//route to get specific game by id
app.get('/api/game/:id', async (req, res)=>{
    const game = await gameModel.findById(req.params.id);
    res.json(game);
})

//updating game by id
app.put('/api/game/:id', async (req, res)=>{
    const game = await gameModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(game);
})

//post req to create new game
app.post('/api/games', async (req, res)=>{
    console.log("added: ",req.body.title);
    const {title, year, developer, poster, rating, review} = req.body;

    const newGame = new gameModel({title, year, developer, poster, rating, review});
    await newGame.save();

    res.status(201).json({"message":"game added!",Game:newGame});
})

//post game review by id
app.post('/api/game/:id/review', async (req, res)=> {
    const {content, recommend} = req.body;
    const game = await gameModel.findById(req.params.id);
    console.log(req.body);

    game.review.push({content, recommend});
    await game.save();
    res.status(200).send({message: "review sent", game});
})

//starts the server and listens at port 4000
app.listen(port, ()=> {
    console.log(`runnning on http://localhost:${port}`);
})

app.delete('/api/game/:id', async(req, res) => {
    console.log("deleting game w/ id:", req.params.id);
    const game = await gameModel.findByIdAndDelete(req.params.id);
    res.status(200).send({message: "game deleted", game});
});