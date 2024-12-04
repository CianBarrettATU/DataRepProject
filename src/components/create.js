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
            <h1>Create Component</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add game title:</label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}
                    />
                </div>
                <div>
                    <label>Add game year:</label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => {setYear(e.target.value)}}/>
                </div>
                <div>
                    <label>Add game developer</label>
                    <input type="text"
                        className="form-control"
                        value={developer}
                        onChange={(e) => {setDeveloper(e.target.value)}}/>
                </div>
                <div>
                    <label>Add game poster</label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => {setPoster(e.target.value)}}/>
                </div> 
                <div>
                    <input type="submit" value="add game"></input>
                </div>
            </form>
        </div>
    );
}
export default Create;