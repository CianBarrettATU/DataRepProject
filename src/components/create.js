import axios from "axios";
import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [developer, setDeveloper] = useState('');
    const [poster, setPoster] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const game = { title, year, developer, poster };
        console.log(game);

        axios.post('http://localhost:4000/api/games', game)
            .then((res) => { console.log(res.data) })
            .catch();
    }
    return (
        <div>
            <h2 style={{padding: '15px', color: 'white'}}> Add a game to the DataBase:</h2>
            <form onSubmit={handleSubmit} style={{padding: '25px'}}>
                <div className="form-group">
                    <label style={{color: 'white'}}>Add Game Title:</label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}
                    />
                </div>
                <div>
                    <label style={{color: 'white'}}>Add Game Year:</label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => {setYear(e.target.value)}}/>
                </div>
                <div>
                    <label style={{color: 'white'}}>Add Game Developer:</label>
                    <input type="text"
                        className="form-control"
                        value={developer}
                        onChange={(e) => {setDeveloper(e.target.value)}}/>
                </div>
                <div>
                    <label style={{color: 'white'}}>Add Game Poster:</label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => {setPoster(e.target.value)}}/>
                </div> 
                <div>
                    <input style={{padding: '10px', marginTop: '15px', borderRadius: '10px',}} type="submit" value="Add Game"></input>
                </div>
            </form>
        </div>
    );
}
export default Create;