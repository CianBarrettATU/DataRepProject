import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const RatingList = () => {
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

    return (
        <div>
            {games.map((game) => (
                <Card key={game._id} style={{marginBottom: '20px', border: '2px solid black'}}>
                    <Card.Body style={{display: 'flex', alignItems: 'center'}}>
                        <img src={game.poster} style={{borderRadius: '5px', border: '3px solid black'}}/>
                        <div>
                        <h2>{game.title}</h2>
                        <h2>Score: {game.rating || "no rating"} / 10</h2>

                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>

    )
}

export default RatingList;