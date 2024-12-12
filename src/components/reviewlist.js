import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const ReviewList = () => {
    const [games, setGames] = useState([]);
    

    useEffect(() => {
        axios.get("http://localhost:4000/api/games")
            .then((res) => {
                setGames(res.data.games);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const calculateRecommendations = (review) => {
        const positiveRec = review.filter((review)=> review.recommend === "Yes").length;
        return((positiveRec / review.length) * 100).toFixed(2);
    }

    return (
        <div>
            {games.map((game) => (
                <Card key={game._id} style={{margin: '20px', border: '2px solid black', backgroundColor: '#1DB954'}}>
                    <Card.Body style={{display: 'flex', alignItems: 'flex-start'}}>
                        <div>
                            <img src={game.poster} style={{borderRadius: '5px', border: '3px solid black'}}/>
                            <Button onClick={navigate('/review')} style={{padding: '15px', marginTop: '20px', border: '3px solid black'}}> Review </Button>
                        </div>
                        <div>
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