import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const GameItem = (props)=>{
    useEffect(()=>{
        console.log("game item:", props.mygame);
    }, [props.mygame]);

    return(
        <div>
            <Card.Header>{props.mygame.title}</Card.Header>
        </div>
    );
}

export default GameItem;