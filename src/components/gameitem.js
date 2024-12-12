import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

const GameItem = (props)=>{

    //handles deleting the game
    const handleDelete = (e) => {
      e.preventDefault();

      //sends delete req to db
      axios.delete('http://localhost:4000/api/game/' + props.mygame._id)
      .then(() => {
          //calls reload refresh the data
          props.Reload();
      })
      .catch((error) =>{
        console.log("Err deleting game", error);
      });
    };

    return(
        <div>
            <Card style={{margin: '20px', backgroundColor: '#1DB954', border: '2px solid black', display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
              <Card.Header><h1>{props.mygame.title}</h1></Card.Header>  
              <Card.Body>
                <img src={props.mygame.poster} alt={props.mygame.title} style={{borderRadius: '5px', border: '3px solid black'}}/>
                <h3>{props.mygame.year}</h3>
                <h3>{props.mygame.developer}</h3>
                <Button variant="danger" onClick={handleDelete} style={{border: '2px solid black'}}>Delete</Button>
              </Card.Body>
              <div style={{display: 'flex', justifyContent: 'left', gap: '10px', padding: '10px'}}>
                <Link className="btn btn-primary d-inline-block" to={"/edit/"+ props.mygame._id} style={{border: '2px solid black'}}>Edit</Link>
                <Link className="btn btn-secondary" to={"/rating/"+ props.mygame._id} style={{border: '2px solid black'}}>Rate</Link>
                <Link className="btn btn-primary d-inline-block" to={"/review/"+ props.mygame._id} style={{border: '2px solid black'}}>Review</Link>
              </div>
              
            </Card>
        </div>
    );
}

export default GameItem;