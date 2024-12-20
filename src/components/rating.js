import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const Rating = () => {;
    const {id} = useParams('');

    //state variables
    const [game, setGame] = useState('');
    const [rating, setRating] = useState('');

    useEffect(()=> {
        //get req on specific game id
        axios.get('http://localhost:4000/api/game/' + id)
        .then((res)=>{
           setGame(res.data); 
        })
        .catch((err)=>{
            console.log("err:", err)
        })
    },[id]);

    //handles rating of game
    const handleRating = (e) => {
        e.preventDefault();

        //saves game and its rating to 'ratedGame' object
        const ratedGame = {game, rating};
        console.log(ratedGame);

        //sends put req to db with rated game
        axios.put('http://localhost:4000/api/game/'+id, ratedGame)
        .then((res)=>{
            console.log("edited:"+ res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return(
        <div>
            <form onSubmit={handleRating}>
                <div className="form-group">
                    <label style={{padding: '15px', color:'white'}}>Game Rating:</label>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        step="1"
                        className="form-control"
                        value={rating}
                        onChange={(e)=> setRating(e.target.value)}
                        placeholder="Rate the game from 1-10"
                        style={{margin: '15px'}}
                    />
                </div>
                <button style={{margin: '15px'}} type="submit" className="btn btn-primary">Submit Rating</button>
            </form>
        </div>
    );
}

export default Rating;