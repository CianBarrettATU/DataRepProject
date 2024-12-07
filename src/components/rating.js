import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const Rating = () => {;
    const {id} = useParams('');
    const [game, setGame] = useState('');
    const [rating, setRating] = useState('');

    useEffect(()=> {
        axios.get('http://localhost:4000/api/game/' + id)
        .then((res)=>{
           setGame(res.data); 
        })
        .catch((err)=>{
            console.log("err:", err)
        })
    },[id]);

    const handleRating = (e) => {
        e.preventDefault();

        const ratedGame = {game, rating};
        console.log(ratedGame);

        axios.put('http://localhost:4000/api/game/'+id, ratedGame)
        .then((res)=>{
            console.log("edited:"+ res.data);
            //TODO: maybe navigate
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return(
        <div>
            <form onSubmit={handleRating}>
                <div className="form-group">
                    <label>Game Rating:</label>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        step="1"
                        className="form-control"
                        value={rating}
                        onChange={(e)=> setRating(e.target.value)}
                        placeholder="Rate the game from 1-10"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit Rating</button>
            </form>
        </div>
    );
}

export default Rating;