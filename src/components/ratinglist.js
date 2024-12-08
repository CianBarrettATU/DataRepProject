import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Games from "./games";

const RatingList = () => {
    const [games, setGames] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:4000/api/games")
        .then((res)=> {
            setGames(res.data.games);
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);

    return(
        <Card>
            <Games myGames={games}/>
        </Card>
    )
}

export default RatingList;