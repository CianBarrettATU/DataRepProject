import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

const GameItem = (props)=>{
    const handleDelete = (e) => {
      e.preventDefault();
      axios.delete('http://localhost:4000/api/game/' + props.mygame._id)
      .then(() => {
          props.Reload();
      })
      .catch((error) =>{
        console.log("Err deleting game", error);
      });
    };

    return(
        <div>
            <Card>
              <Card.Header>{props.mygame.title}</Card.Header>  
              <Card.Body>
                <img src={props.mygame.poster} alt={props.mygame.title} />
                <footer>{props.mygame.year}</footer>
                <footer>{props.mygame.developer}</footer>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
              </Card.Body>
              <Link className="btn btn-primary" to={"/edit/"+ props.mygame._id}>Edit</Link>
            </Card>
        </div>
    );
}

export default GameItem;