import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ReviewList = () => {

    //state variable to store list of games
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    
    useEffect(() => {
        //get request made on all games
        axios.get("http://localhost:4000/api/games")
            .then((res) => {
                setGames(res.data.games);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    //function to calculate percentage of positive recommendations
    const calculateRecommendations = (review) => {
        const positiveRec = review.filter((review)=> review.recommend === "Yes").length;
        return((positiveRec / review.length) * 100).toFixed(2);
    }

    return (
        <div>
            {games.map((game) => (
                <Card key={game._id} style={{margin: '20px', border: '2px solid black', backgroundColor: '#1DB954'}}>
                    <Card.Body style={{display: 'flex', alignItems: 'flex-start'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <img src={game.poster} style={{borderRadius: '5px', border: '3px solid black'}}/>
                            <Button style={{marginTop: '15px', border: '3px solid black'}}  onClick={() =>navigate(`/review/${game._id}`)}> Review </Button>
                        </div>
                        <div style={{marginLeft: '20px', flex: 1}}>
                            <h3 style={{padding: '15px'}}>{game.title}</h3>
                            <h5 style={{padding: '15px'}}>Total reviews: {game.review?.length}</h5>
                            <h5 style={{padding: '15px'}}>User Recommendation: {calculateRecommendations(game.review) }  %</h5>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>

    )
}

export default ReviewList;